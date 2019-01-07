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

class SciniFiles extends LitElement {
  constructor() {
    super();
    this.uri = 'http://' + window.location.hostname + ':8000';
    this.hasContent = false;
  }

  static get properties() {
    return {
      hasContent: { type: Boolean }
    }
  }

  render() {
    return html`
      ${SharedStyles}
      <style>
        :host {
          display: block;
        }

        div {
          visibility: hidden;
        }

        div[has-content] {
          visibility: visible;
        }
      </style>
      <div ?has-content=${this.hasContent}>
        <iframe src="${this.uri}" frameborder="0"></iframe>
      </div>
    `;
  }

  updated() {
    let nodeList = this.shadowRoot.querySelectorAll('iframe');
    if (nodeList[0].childElementCount > 0) {
      this.hasContent = true;
    }
    else {
      console.log('problem loading iframe');
      this.hasContent = false;
    }
  }
}

window.customElements.define('scini-files', SciniFiles);
