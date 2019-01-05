import { html, LitElement } from '@polymer/lit-element'
import '@polymer/paper-tooltip/paper-tooltip.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

import { store } from '../store.js';

class RecordStatus extends LitElement {
  constructor() {
    super();
    this.id = '';
    this.location = '';
    this.status = 'unknown';
  }

  static get properties() {
    return {
      id: { type: String },
      location: { type: String },
      status: { type: String }
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

        .dot[status="recording"] {
          background-color: green;
        }

        .dot[status="stopped"] {
          background-color: red;
        }
      </style>
      <div status="${this.status}" class="dot" id="video-${this.id}-record"></div><paper-tooltip for="video-${this.id}-record">${this.location}</paper-tooltip>
    `;
  }
}

window.customElements.define('record-status', RecordStatus);
