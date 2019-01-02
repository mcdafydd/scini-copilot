/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html, LitElement } from '@polymer/lit-element';

import { SharedStyles } from './shared-styles.js';

class SciniAbout extends LitElement {
  render() {
    return html`
    ${SharedStyles}
      <style>
        :host {
          padding: 16px;
          text-align: center;
          line-height: 1.5;
        }
      </style>

      <p>SCINI Copilot PWA</p>
    `;
  }
}

window.customElements.define('scini-about', SciniAbout);
