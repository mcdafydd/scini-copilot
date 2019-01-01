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

import './scini-image.js';

class SciniTelemetry extends LitElement {
  render() {
    return html`
      <style>
        :host {
          display: block;
        }

        .books-bg {
          height: 300px;
          max-width: 570px;
          margin: 0 auto;
        }

        .books-desc {
          padding: 24px 16px 0;
          text-align: center;
        }

        /* Wide Layout */
        @media (min-width: 648px) {
          .books-desc {
            padding: 96px 16px 0;
          }
        }
      </style>

      <scini-image class="books-bg" alt="SCINI Copilot Home" center src="images/books-bg.jpg" placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAAI0lEQVR4AWPw2v7Wfe1Dj7X3/Pd8YPDf+Uqva79x38GQvW8Bu0sOexptskUAAAAASUVORK5CYII="></scini-image>
    `;
  }
}

window.customElements.define('scini-telemetry', SciniTelemetry);
