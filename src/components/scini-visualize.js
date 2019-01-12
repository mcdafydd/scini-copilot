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

class SciniVisualize extends LitElement {
  constructor() {
    super();
    this.uri = 'http://' + window.location.hostname + ':5601';
  }

  render() {
    return html`
      ${SharedStyles}
      <iframe src="${this.uri}" frameborder="0"></iframe>
    `;
  }

  firstUpdated() {
    console.dir(this.shadowRoot.querySelectorAll('iframe'));
  }
}

window.customElements.define('scini-visualize', SciniVisualize);