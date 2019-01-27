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
    this.streamer = {};
    this.lastCamera = '';
    this._needsStream = false;
    this.isPlaying = false; // current state
    this.worker = '';
  }

  static get properties() {
    return {
      streamer: { type: Object },
      lastCamera: { type: String },
      _needsStream: { type: Boolean }
    };
  }

  get needsStream() {
    return this._needsStream;
  }

  set needsStream(val) {
    this._needsStream = val;
    if (val === true) {
      this.startStream();
    }
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
      <div id="camera-canvas-loader" class="lds-ripple hidden"><div></div><div></div></div>
    `;
  }

  firstUpdated() {
    // websocket and audio should prevent background throttling
    SilentAudio();
    this.worker = initWorker.bind(this)(this.shadowRoot.querySelector('#camera-canvas'));
    this.lastCamera = loadLastCamera();
    this.needsStream = true;
  }

  stateChanged(state) {
    this.streamer = state.app.streamer;
    if (state.app.page === 'camera' && !this.isPlaying) {
      this.needsStream = true;
    }
    if (state.app.page !== 'camera' && this.isPlaying) {
      this.stopStream();
    }
  }

  _selectHandler(e) {
    console.log('Selected camera ', e.target.value);
    this.lastCamera = e.target.value.split('-')[1];
    window.localStorage.setItem('lastCamera', this.lastCamera);
    this.stopStream();
    this.needsStream = true;
  }

  stopStream() {
    let elem = this.shadowRoot.querySelector('#camera-canvas');
    elem.classList.add('hidden');
    elem = this.shadowRoot.querySelector('#camera-canvas-loader');
    elem.classList.add('hidden');
    this.worker.postMessage({
      command: 'close'
    });
    this.isPlaying = false;
  }

  // change this to use this.lastCamera always make sure that's current
  startStream() {
    // display loading spinner until websocket reconnects
    let elem = this.shadowRoot.querySelector('#camera-canvas-loader');
    elem.classList.remove('hidden');
    let wsPort;
    if (typeof this.streamer === 'object') {
      if (this.streamer.hasOwnProperty(this.lastCamera)) {
        wsPort = this.streamer[this.lastCamera].wsPort;
      }
    }

    if (!isNaN(wsPort)) {
      // inform websocket worker to open new camera connection
      this.worker.postMessage({
        hostname: window.location.hostname,
        wsPort: wsPort
      });
      this.needsStream = false;
      this.isPlaying = true;
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
