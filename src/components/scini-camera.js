/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';

import { store } from '../store.js';
import { initWorker, initKeyboardControls, sendCamera, SilentAudio } from '../shared-camera.js';
import { SharedStyles } from './shared-styles.js';
//import './video-mjpeg.js';

class SciniCamera extends connect(store)(LitElement) {
  constructor() {
    super();
    this.cameraMap = {};
    this.lastCamera = loadLastCamera();
    this.needsStream = false;
    this.playing = false; // attribute
    this.isPlaying = false; // current state
    this.worker = '';
  }

  static get properties() {
    return {
      cameraMap: { type: Object },
      lastCamera: { type: String },
      needsStream: { type: Boolean },
      playing: { type: Boolean }
    };
  }

  render() {
    return html`
      ${SharedStyles}
      <style>
        .hidden {
          visibility: hidden;
        }
      </style>
      <select id="video-select" @change="${(e) => this._selectHandler(e)}">
        <option disabled><em>Clump</em></option>
        <option ?selected="${this.lastCamera === 'side'}" class="side" value="video-side">Side</option>
        <option ?selected="${this.lastCamera === 'bore'}" class="bore" value="video-bore">Bore</option>
        <option disabled>──────────</option>
        <option disabled><em>ROV</em></option>
        <option ?selected="${this.lastCamera === 'forward'}" class="forward" value="video-forward">Forward</option>
        <option ?selected="${this.lastCamera === 'up'}" class="up" value="video-up">Up</option>
        <option ?selected="${this.lastCamera === 'down'}" class="down" value="video-down">Down</option>
      </select>
      <canvas class="video-canvas" id="camera-canvas"><div class="support">Your browser does not support OffscreenCanvas.</div></canvas>
    `;
  }

  firstUpdated() {
    // websocket and audio should prevent background throttling
    SilentAudio();
    this.worker = initWorker.bind(this)(this.shadowRoot.querySelector('#camera-canvas'));
    this.needsStream = true;
    let id = loadLastCamera();
    this.startStream(id);
  }

  updated() {
    if (this.isPlaying && !this.playing) {
      this.isPlaying = false;
      this.needsStream = false;
      this.stopStream();
    }
    else if (!this.isPlaying && this.playing) {
      this.isPlaying = true;
      this.needsStream = true;
      let id = loadLastCamera();
      this.startStream(id);
    }
  }

  stateChanged(state) {
    this.cameraMap = state.app.cameraMap;
    if (this.needsStream === true) {
      this.startStream(this.lastCamera);
    }
  }

  _selectHandler(e) {
    console.log('Selected camera ', e.target.value);
    let id = e.target.value.split('-')[1];
    window.localStorage.setItem('lastCamera', id);
    this.needsStream = true;
    this.stopStream();
    this.startStream(id);
  }

  stopStream() {
    let elem = this.shadowRoot.querySelector('#camera-canvas');
    elem.classList.add('hidden');
    this.worker.postMessage({
      command: 'close'
    });
  }

  startStream(id) {
    let port;
    if (typeof this.cameraMap === 'object') {
      console.dir(this);
      if (this.cameraMap.hasOwnProperty(id)) {
        port = this.cameraMap[id].port;
      }
    }

    if (!isNaN(port)) {
      // inform websocket worker to open new camera connection
      this.worker.postMessage({
        hostname: window.location.hostname,
        wsPort: port
      });
      this.needsStream = false;
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
    ret = 'forward';
  }
  return ret;
}

window.customElements.define('scini-camera', SciniCamera);
