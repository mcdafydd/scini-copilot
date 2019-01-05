import { html, LitElement } from '@polymer/lit-element'
import '@polymer/paper-tooltip/paper-tooltip.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

import { store } from '../store.js';

class RecordStatus extends connect(store)(LitElement) {
  constructor() {
    super();
    this.id = '';
    this.location = '';
    this.active = false;
    this.inactive = false;
  }

  static get properties() {
    return {
      id: { type: String },
      location: { type: String },
      active: { type: Boolean },
      inactive: { type: Boolean }
    }
  }

  render() {
    return html`
      <style>
        :host {
          display: inline-block;
          padding: 1.5px;
          text-align: center;
          line-height: 1.5;
        }

        paper-tooltip {
          --paper-tooltip-delay-in: 0;
          --paper-tooltip-duration-in: 100;
          --paper-tooltip-duration-out: 0;
          --paper-tooltip-background: lightskyblue;
        }

        .dot {
          height: 25px;
          width: 25px;
          background-color: yellow;
          border-radius: 50%;
          position: relative;
          border-bottom: 1px dotted black;
        }

        .dot[active] {
          background-color: green;
        }

        .dot[inactive] {
          background-color: red;
        }
      </style>
      <div ?active=${this.active} ?inactive=${this.inactive} class="dot" id="video-${this.id}-record"></div><paper-tooltip for="video-${this.id}-record">${this.location}</paper-tooltip>
    `;
  }

  stateChanged(state) {
    if (state.app.hasOwnProperty('cameraMap')) {
      if (state.app.cameraMap.hasOwnProperty(this.id)) {
        if (state.app.cameraMap[this.id].record === 'true') {
          this.active = true;
          this.inactive = false;
        }
        else if (state.app.cameraMap[this.id].record === 'false') {
          this.active = false;
          this.inactive = true;
        }
      }
    }
  }
}

window.customElements.define('record-status', RecordStatus);
