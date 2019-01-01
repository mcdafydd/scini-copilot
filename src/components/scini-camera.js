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

import { SharedStyles } from './shared-styles.js';
import { initWorker } from '../shared-camera.js';

//import './video-mjpeg.js';

class SciniCamera extends LitElement {
  constructor() {
    super();
    this.cameraMap = initCameraMap();
    this.lastCamera = '';
    this.worker = '';
  }

  static get properties() {
    return {
      lastCamera: { type: String }
    }
  }

  render() {
    return html`
      ${SharedStyles}
      <select id="video-select">
        <option disabled><em>Clump</em></option>
        <option class="side" value="video-211">Side</option>
        <option class="bore" value="video-213">Bore</option>
        <option disabled>──────────</option>
        <option disabled><em>ROV</em></option>
        <option class="forward" value="video-215">Forward</option>
        <option class="up" value="video-217">Up</option>
        <option class="down" value="video-218">Down</option>
      </select>
      <canvas id="camera-canvas"><div class="support">Your browser does not support OffscreenCanvas.</div></canvas>
    `;
  }

  firstUpdated() {
    this.worker = initWorker.bind(this)(this.shadowRoot.querySelector('#camera-canvas'));
  }

}

function initCameraMap() {
  let obj = window.localStorage.getItem('cameraMap');
  let ret;
  if (obj === null)
    ret = {};
  else
    ret = JSON.parse(obj);
  return ret;
}

window.customElements.define('scini-camera', SciniCamera);
