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

class SciniControls extends LitElement {
  render() {
    return html`
      ${SharedStyles}
      <style>
        :host {
          display: block;
        }

        .container {
          display: grid;
          position: relative;
          height: 100%;
          width: 100%;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          grid-template-rows: 2fr 2fr 2fr 2fr 2fr 2fr;
          grid-column-gap: 4px;
          grid-row-gap: 4px;
          justify-items: stretch;
          align-items: stretch;
        }

        .item {

        }

        /* Wide Layout */
        @media (min-width: 648px) {
        }
      </style>
      <ul class="container">
        <li class="item side">
          <h5>Side Resolution</h5>
          <button class="rb ctrl-btn small resolution-211" id="resolution-211-4">1/4</button>
          <button class="rb ctrl-btn small resolution-211" id="resolution-211-2">1/2</button>
          <button class="rb ctrl-btn small resolution-211" id="resolution-211-1")">full</button>
        </li>
        <li class="item bore">
          <h5 id="resolution-213-title">Bore Resolution</h5>
          <button class="rb ctrl-btn small resolution-213" id="resolution-213-4">1/4</button>
          <button class="rb ctrl-btn small resolution-213" id="resolution-213-2">1/2</button>
          <button class="rb ctrl-btn small resolution-213" id="resolution-213-1")">full</button>
        </li>
        <li class="item forward">
          <h5 id="resolution-215-title">Forward Resolution</h5>
          <button class="rb ctrl-btn small resolution-215" id="resolution-215-4">1/4</button>
          <button class="rb ctrl-btn small resolution-215" id="resolution-215-2">1/2</button>
          <button class="rb ctrl-btn small resolution-215" id="resolution-215-1")">full</button>
        </li>
        <li class="item up">
          <h5 id="resolution-217-title">Up Resolution</h5>
          <button class="rb ctrl-btn small resolution-217" id="resolution-217-4">1/4</button>
          <button class="rb ctrl-btn small resolution-217" id="resolution-217-2">1/2</button>
          <button class="rb ctrl-btn small resolution-217" id="resolution-217-1")">full</button>
        </li>
        <li class="item down">
          <h5 id="resolution-218-title">Down Resolution</h5>
          <button class="rb ctrl-btn small resolution-218" id="resolution-218-4">1/4</button>
          <button class="rb ctrl-btn small resolution-218" id="resolution-218-2">1/2</button>
          <button class="rb ctrl-btn small resolution-218" id="resolution-218-1">full</button>
        </li>
      </ul>
    `;
  }
}

window.customElements.define('scini-controls', SciniControls);
