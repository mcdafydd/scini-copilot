/**
   * `<record-status>` render a dot based on the status attribute and optional tooltip.
   * ## record-status
   * Set the status attribute to change dot color as follows:
   * * "recording" will set color green
   * * "stopped" will set color red
   * * "unknown" and default color is yellow
   *
   * Add an optional <paper-tooltip> by setting the "id" and "tooltip" attributes
   * Example usage:
   * <body>
   *   <record-status status="recording" id="1" tooltip="info"></record-status>
   *
   * @customElement
   * @polymer
   *
   */

import { html, LitElement } from 'lit-element'
import '@polymer/paper-tooltip/paper-tooltip.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

import { store } from '../store.js';

class RecordStatus extends LitElement {
  constructor() {
    super();
    this.id = '';
    this.tooltip = '';
    this.status = 'unknown';
  }

  static get properties() {
    return {
      id: { type: String },
      tooltip: { type: String },
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
          --paper-tooltip-text-color: #000000;
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
      <div status="${this.status}" class="dot" id="video-${this.id}-record"></div><paper-tooltip for="video-${this.id}-record"><p>${this.tooltip}</p><p>Recording status:<br>${this.status}</p></paper-tooltip>
    `;
  }
}

window.customElements.define('record-status', RecordStatus);
