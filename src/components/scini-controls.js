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
import '@polymer/paper-button/paper-button.js';

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

        .slider {
          -webkit-appearance: none;
          width: 100%;
          height: 15px;
          border-radius: 5px;
          background: #d3d3d3;
          outline: none;
          opacity: 0.7;
          -webkit-transition: opacity .15s ease-in-out;
          transition: opacity .15s ease-in-out;
        }

        .slider:hover {
          opacity: 1;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: black;
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          width: 25px;
          height: 25px;
          border: 0;
          border-radius: 50%;
          background: black;
          cursor: pointer;
        }

        .sliderVal {
          font-size: 14px;
          font-weight: bold;
          color: white;
          background: black;
        }

        h5 {
          color: rgb(0, 0, 0);
        }

        paper-button.ctrl {
          background: linear-gradient(rgb(117, 112, 112), rgb(224, 209, 209));
          color: #000000;
          line-height: 1.0;
          min-height: 3vh;
          min-width: 5vw;
          padding-top: 5px;
          padding-bottom: 2px;
        }

        paper-button.large {
          border: none;
          color: white;
          margin-bottom: 2px;
          padding: 5px 16px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 12px;
          width: 60%;
          height: 60%;
        }

        /* Wide Layout */
        @media (min-width: 648px) {
        }
      </style>
      <ul class="container">
        <li class="item side">
          <h5>Side Resolution</h5>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '211', '4')}" class="ctrl resolution-211" id="resolution-211-4">1/4</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '211', '2')}" class="ctrl resolution-211" id="resolution-211-2">1/2</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '211', '1')}" class="ctrl resolution-211" id="resolution-211-1">full</paper-button>
        </li>
        <li class="item bore">
          <h5 id="resolution-213-title">Bore Resolution</h5>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '213', '4')}" class="ctrl resolution-213" id="resolution-213-4">1/4</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '213', '2')}" class="ctrl resolution-213" id="resolution-213-2">1/2</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '213', '1')}" class="ctrl resolution-213" id="resolution-213-1">full</paper-button>
        </li>
        <li class="item forward">
          <h5 id="resolution-215-title">Forward Resolution</h5>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '215', '4')}" class="ctrl resolution-215" id="resolution-215-4">1/4</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '215', '2')}" class="ctrl resolution-215" id="resolution-215-2">1/2</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '215', '1')}" class="ctrl resolution-215" id="resolution-215-1">full</paper-button>
        </li>
        <li class="item up">
          <h5 id="resolution-217-title">Up Resolution</h5>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '217', '4')}" class="ctrl resolution-217" id="resolution-217-4">1/4</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '217', '2')}" class="ctrl resolution-217" id="resolution-217-2">1/2</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '217', '1')}" class="ctrl resolution-217" id="resolution-217-1">full</paper-button>
        </li>
        <li class="item down">
          <h5 id="resolution-218-title">Down Resolution</h5>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '218', '4')}" class="ctrl resolution-218" id="resolution-218-4">1/4</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '218', '2')}" class="ctrl resolution-218" id="resolution-218-2">1/2</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '218', '1')}" class="ctrl resolution-218" id="resolution-218-1">full</paper-button>
        </li>
        <li class="item side">
          <h5>Side Quality</h5>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '211', '70')}" class="ctrl quality-211" id="quality-211-70">70</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '211', '80')}" class="ctrl quality-211" id="quality-211-80">80</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '211', '85')}" class="ctrl quality-211" id="quality-211-85">85</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '211', '92')}" class="ctrl quality-211" id="quality-211-92">92</paper-button>
        </li>
        <li class="item bore">
          <h5 id="quality-213-title">Bore Quality</h5>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '213', '70')}" class="ctrl quality-213" id="quality-213-70">70</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '213', '80')}" class="ctrl quality-213" id="quality-213-80">80</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '213', '85')}" class="ctrl quality-213" id="quality-213-85">85</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '213', '92')}" class="ctrl quality-211" id="quality-213-92">92</paper-button>
        </li>
        <li class="item forward">
          <h5 id="quality-215-title">Forward Quality</h5>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '215', '70')}" class="ctrl quality-215" id="quality-215-70">70</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '215', '80')}" class="ctrl quality-215" id="quality-215-80">80</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '215', '85')}" class="ctrl quality-215" id="quality-215-85">85</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '215', '92')}" class="ctrl quality-211" id="quality-215-92">92</paper-button>
        </li>
        <li class="item up">
          <h5 id="quality-217-title">Up Quality</h5>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '217', '70')}" class="ctrl quality-217" id="quality-217-70">70</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '217', '80')}" class="ctrl quality-217" id="quality-217-80">80</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '217', '85')}" class="ctrl quality-217" id="quality-217-85">85</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '217', '92')}" class="ctrl quality-211" id="quality-217-92">92</paper-button>
        </li>
        <li class="item down">
          <h5 id="quality-218-title">Down Quality</h5>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '218', '70')}" class="ctrl quality-218" id="quality-218-70">70</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '218', '80')}" class="ctrl quality-218" id="quality-218-80">80</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '218', '85')}" class="ctrl quality-218" id="quality-218-85">85</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '218', '92')}" class="ctrl quality-211" id="quality-218-92">92</paper-button>
        </li>
        <li class="item side">
          <h5 id="exposure-211-title">Side Exposure</h5>
          <input class="slider" id="exposure-211" type="range" min="1.0" max="125" step="1.0" value="30">
          <span id="exposure-211-val" class="sliderVal"></span>
        </li>
        <li class="item bore">
          <h5 id="exposure-213-title">Bore Exposure</h5>
          <input class="slider" id="exposure-213" type="range" min="1.0" max="125" step="1.0" value="30">
          <span id="exposure-213-val" class="sliderVal"></span>
        </li>
        <li class="item forward">
          <h5 id="exposure-215-title">Forward Exposure</h5>
          <input class="slider" id="exposure-215" type="range" min="1.0" max="125" step="1.0" value="30">
          <span id="exposure-215-val" class="sliderVal"></span>
        </li>
        <li class="item up">
          <h5 id="exposure-217-title">Up Exposure</h5>
          <input class="slider" id="exposure-217" type="range" min="1.0" max="125" step="1.0" value="30">
          <span id="exposure-217-val" class="sliderVal"></span>
        </li>
        <li class="item down">
          <h5 id="exposure-218-title">Down Exposure</h5>
          <input class="slider" id="exposure-218" type="range" min="1.0" max="125" step="1.0" value="30">
          <span id="exposure-218-val" class="sliderVal"></span>
        </li>
        <li class="item side">
          <h5>Side Snap</h5>
          <paper-button raised class="ctrl large" id="snapFull-211-1"></paper-button>
        </li>
        <li class="item bore">
          <h5>Bore Snap</h5>
          <paper-button raised class="ctrl large" id="snapFull-213-1"></paper-button>
        </li>
        <li class="item forward">
          <h5>Forward Snap</h5>
          <paper-button raised class="ctrl large" id="snapFull-215-1"></paper-button>
        </li>
        <li class="item up">
          <h5>Up Snap</h5>
          <paper-button raised class="ctrl large" id="snapFull-217-1"></paper-button>
        </li>
        <li class="item down">
          <h5>Down Snap</h5>
          <paper-button raised class="ctrl large" id="snapFull-218-1"></paper-button>
        </li>
      </ul>
    `;
  }

  _clickHandler(type, func, id, value) {
    let obj = {};
    obj[type] = [func, id, value];
    const event = new CustomEvent('mqttPublish', {
      bubbles: true,
      composed: true,
      detail: obj
    });
    this.dispatchEvent(event);
    console.debug('_clickHandler', type, func, id, value);
  }
}

window.customElements.define('scini-controls', SciniControls);
