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
import { SharedStyles } from './shared-styles.js';

class SciniNumbers extends connect(store)(LitElement) {
  constructor() {
    super();
  }

  static get properties() {
    return {
      value: { type: Number }
    }
  }

  render() {
    return html`
      ${SharedStyles}
      <style>
        :host {
          display: block;
        }

        /* Wide Layout */
        @media (min-width: 648px) {
        }
      </style>
    `;
  }

  updateValue(key, value) {
    let items = document.getElementsByClassName(key);
    for (let i=0; i<items.length; i++) {
      items[i].innerHTML = value;
    }
  }
}

window.customElements.define('scini-numbers', SciniNumbers);
