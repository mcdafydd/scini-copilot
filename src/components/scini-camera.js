/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from '@polymer/lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';

import { store } from '../store.js';
import { initWorker } from '../shared-camera.js';
//import './video-mjpeg.js';

class SciniCamera extends connect(store)(LitElement) {
  constructor() {
    super();
    this.cameraMap = {};
    this.lastCamera = loadLastCamera();
    this.worker = '';
  }

  static get properties() {
    return {
      cameraMap: { type: Object },
      lastCamera: { type: String }
    }
  }

  render() {
    return html`
      <select id="video-select" @change="${(e) => this._selectHandler(e, this.cameraMap, this.worker)}">
        <option disabled><em>Clump</em></option>
        <option ?selected="${this.lastCamera === '211'}" class="side" value="video-211">Side</option>
        <option ?selected="${this.lastCamera === '213'}" class="bore" value="video-213">Bore</option>
        <option disabled>──────────</option>
        <option disabled><em>ROV</em></option>
        <option ?selected="${this.lastCamera === '215'}" class="forward" value="video-215">Forward</option>
        <option ?selected="${this.lastCamera === '217'}" class="up" value="video-217">Up</option>
        <option ?selected="${this.lastCamera === '218'}" class="down" value="video-218">Down</option>
      </select>
      <canvas class="video-canvas" id="camera-canvas"><div class="support">Your browser does not support OffscreenCanvas.</div></canvas>
    `;
  }

  firstUpdated() {
    this.worker = initWorker.bind(this)(this.shadowRoot.querySelector('#camera-canvas'));
  }

  stateChanged(state) {
    this.cameraMap = state.app.cameraMap;
  }

  _selectHandler(e, cameraMap, worker) {
    console.log('Selected camera ', e.target.value);
    let id = e.target.value.split('-')[1];
    window.localStorage.setItem('lastCamera', id);
    // inform websocket worker to get new camera stream
    if (cameraMap.hasOwnProperty(id)) {
      // close old websocket connection
      worker.postMessage({
        command: 'close'
      });
      worker.postMessage({
        hostname: window.location.hostname,
        wsPort: cameraMap[id].port-100
      });
    }
  }
}

function loadLastCamera() {
  let str = window.localStorage.getItem('lastCamera');
  let ret;
  if (str !== null) {
    ret = str;
  }
  else {
    // set default as forward camera
    ret = '215';
  }
  return ret;
}

window.customElements.define('scini-camera', SciniCamera);
