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
          /*grid-template-rows: 2fr 2fr 2fr 2fr 2fr 2fr;*/
          grid-column-gap: 4px;
          grid-row-gap: 4px;
          justify-items: stretch;
          align-items: stretch;
        }

        .item {
          padding: 4px;
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

        .ctrl-btn {
          background: linear-gradient(rgb(117, 112, 112), rgb(224, 209, 209));
          color: #000000;
          line-height: 1.0;
          min-height: 3vh;
          min-width: 5vw;
          padding-top: 4px;
          padding-bottom: 2px;
        }

        .large {
          border: none;
          color: white;
          margin-bottom: 2px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 12px;
          width: 60%;
          height: 60%;
        }

        /* https://love2dev.com/blog/css-background-stripes/ */
        .barbershop-pole {
          margin: 0 auto;
          background-color: #fff;
          background-repeat: repeat-y;
          background-size: 100% 88px;
          background-position: 0% 0%;
          background-image: repeating-linear-gradient(-25deg, #fff, #fff 20px, #df5646 20px, #df5646 40px, #fff 40px, #fff 60px, #1c78a4 60px, #1c78a4 80px);
        }

        h5 {
          color: rgb(0, 0, 0);
        }

        li.a {
          padding: 0.35em 0.35em;
          text-decoration: none;
          width: 30%;
        }

        li.a:hover {
          background-color: #555;
        }

        li.a:active {
          background-color: black;
        }

        /* Wide Layout */
        @media (min-width: 648px) {
        }
      </style>
      <ul class="container">
        <li class="item side">
          <h5>Side Resolution</h5>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '211', '4')}" class="ctrl-btn resolution-211" id="resolution-211-4">1/4</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '211', '2')}" class="ctrl-btn resolution-211" id="resolution-211-2">1/2</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '211', '1')}" class="ctrl-btn resolution-211" id="resolution-211-1">full</paper-button>
        </li>
        <li class="item bore">
          <h5 id="resolution-213-title">Bore Resolution</h5>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '213', '4')}" class="ctrl-btn resolution-213" id="resolution-213-4">1/4</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '213', '2')}" class="ctrl-btn resolution-213" id="resolution-213-2">1/2</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '213', '1')}" class="ctrl-btn resolution-213" id="resolution-213-1">full</paper-button>
        </li>
        <li class="item forward">
          <h5 id="resolution-215-title">Forward Resolution</h5>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '215', '4')}" class="ctrl-btn resolution-215" id="resolution-215-4">1/4</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '215', '2')}" class="ctrl-btn resolution-215" id="resolution-215-2">1/2</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '215', '1')}" class="ctrl-btn resolution-215" id="resolution-215-1">full</paper-button>
        </li>
        <li class="item up">
          <h5 id="resolution-217-title">Up Resolution</h5>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '217', '4')}" class="ctrl-btn resolution-217" id="resolution-217-4">1/4</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '217', '2')}" class="ctrl-btn resolution-217" id="resolution-217-2">1/2</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '217', '1')}" class="ctrl-btn resolution-217" id="resolution-217-1">full</paper-button>
        </li>
        <li class="item down">
          <h5 id="resolution-218-title">Down Resolution</h5>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '218', '4')}" class="ctrl-btn resolution-218" id="resolution-218-4">1/4</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '218', '2')}" class="ctrl-btn resolution-218" id="resolution-218-2">1/2</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'resolution', '218', '1')}" class="ctrl-btn resolution-218" id="resolution-218-1">full</paper-button>
        </li>
        <li class="item side">
          <h5>Side Quality</h5>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '211', '70')}" class="ctrl-btn quality-211" id="quality-211-70">70</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '211', '80')}" class="ctrl-btn quality-211" id="quality-211-80">80</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '211', '85')}" class="ctrl-btn quality-211" id="quality-211-85">85</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '211', '92')}" class="ctrl-btn quality-211" id="quality-211-92">92</paper-button>
        </li>
        <li class="item bore">
          <h5 id="quality-213-title">Bore Quality</h5>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '213', '70')}" class="ctrl-btn quality-213" id="quality-213-70">70</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '213', '80')}" class="ctrl-btn quality-213" id="quality-213-80">80</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '213', '85')}" class="ctrl-btn quality-213" id="quality-213-85">85</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '213', '92')}" class="ctrl-btn quality-211" id="quality-213-92">92</paper-button>
        </li>
        <li class="item forward">
          <h5 id="quality-215-title">Forward Quality</h5>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '215', '70')}" class="ctrl-btn quality-215" id="quality-215-70">70</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '215', '80')}" class="ctrl-btn quality-215" id="quality-215-80">80</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '215', '85')}" class="ctrl-btn quality-215" id="quality-215-85">85</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '215', '92')}" class="ctrl-btn quality-211" id="quality-215-92">92</paper-button>
        </li>
        <li class="item up">
          <h5 id="quality-217-title">Up Quality</h5>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '217', '70')}" class="ctrl-btn quality-217" id="quality-217-70">70</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '217', '80')}" class="ctrl-btn quality-217" id="quality-217-80">80</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '217', '85')}" class="ctrl-btn quality-217" id="quality-217-85">85</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '217', '92')}" class="ctrl-btn quality-211" id="quality-217-92">92</paper-button>
        </li>
        <li class="item down">
          <h5 id="quality-218-title">Down Quality</h5>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '218', '70')}" class="ctrl-btn quality-218" id="quality-218-70">70</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '218', '80')}" class="ctrl-btn quality-218" id="quality-218-80">80</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '218', '85')}" class="ctrl-btn quality-218" id="quality-218-85">85</paper-button>
          <paper-button raised @click="${() => this._clickHandler('camera', 'quality', '218', '92')}" class="ctrl-btn quality-211" id="quality-218-92">92</paper-button>
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
          <paper-button raised class="ctrl-btn large" id="snapFull-211-1"><p style="visibility: hidden;">SNAP</p></paper-button>
        </li>
        <li class="item bore">
          <h5>Bore Snap</h5>
          <paper-button raised class="ctrl-btn large" id="snapFull-213-1"><p style="visibility: hidden;">SNAP</p></paper-button>
        </li>
        <li class="item forward">
          <h5>Forward Snap</h5>
          <paper-button raised class="ctrl-btn large" id="snapFull-215-1"><p style="visibility: hidden;">SNAP</p></paper-button>
        </li>
        <li class="item up">
          <h5>Up Snap</h5>
          <paper-button raised class="ctrl-btn large" id="snapFull-217-1"><p style="visibility: hidden;">SNAP</p></paper-button>
        </li>
        <li class="item down">
          <h5>Down Snap</h5>
          <paper-button raised class="ctrl-btn large" id="snapFull-218-1"><p style="visibility: hidden;">SNAP</p></paper-button>
        </li>
      <li class="item side">
        <h5>Side Servo Settings</h5>
        <input class="slider-servo" id="servo-51-center" type="range" min="0" max="65535" step="100" value="48000">
        <span id="servo-51-center-val" class="sliderVal"></span>
        <input class="slider-servo" id="servo-51-speed" type="range" min="0" max="32768" step="100" value="2000">
        <span id="servo-51-speed-val" class="sliderVal"></span>
      </li>
      <li class="item bore">
        <h5>Bore Servo Settings</h5>
        <input class="slider-servo" id="servo-67-center" type="range" min="0" max="65535" step="100" value="32768">
        <span id="servo-67-center-val" class="sliderVal"></span>
        <input class="slider-servo" id="servo-67-speed" type="range" min="0" max="32768" step="100" value="2000">
        <span id="servo-67-speed-val" class="sliderVal"></span>
      </li>
      <li class="item forward">
        <h5>Forward Servo Settings</h5>
        <input class="slider-servo" id="servo-52-center" type="range" min="0" max="65535" step="100" value="37000">
        <span id="servo-52-center-val" class="sliderVal"></span>
        <input class="slider-servo" id="servo-52-speed" type="range" min="0" max="32768" step="100" value="9500">
        <span id="servo-52-speed-val" class="sliderVal"></span>
      </li>
      <li class="item up">
        <h5>Up Servo Settings</h5>
        <input class="slider-servo" id="servo-57-center" type="range" min="0" max="65535" step="100" value="32768">
        <span id="servo-57-center-val" class="sliderVal"></span>
        <input class="slider-servo" id="servo-57-speed" type="range" min="0" max="32768" step="100" value="2000">
        <span id="servo-57-speed-val" class="sliderVal"></span>
      </li>
      <li class="item down">
        <h5>Down Servo Settings</h5>
        <input class="slider-servo" id="servo-58-center" type="range" min="0" max="65535" step="100" value="46200">
        <span id="servo-58-center-val" class="sliderVal"></span>
        <input class="slider-servo" id="servo-58-speed" type="range" min="0" max="32768" step="100" value="2000">
        <span id="servo-58-speed-val" class="sliderVal"></span>
      </li>
      <li class="item side">
        <h5>Side Camera Focus</h5>
        <paper-button raised class="ctrl-btn" id="servo-51-pos">CCW</paper-button>
        <paper-button raised class="ctrl-btn" id="servo-51-neg">CW</paper-button>
      </li>
      <li class="item bore">
        <h5>Bore Camera Focus</h5>
        <paper-button raised class="ctrl-btn" id="servo-67-pos">CCW</paper-button>
        <paper-button raised class="ctrl-btn" id="servo-67-neg">CW</paper-button>
      </li>
      <li class="item forward">
        <h5>Forward Camera Focus</h5>
        <paper-button raised class="ctrl-btn" id="servo-52-pos">CCW</paper-button>
        <paper-button raised class="ctrl-btn" id="servo-52-neg">CW</paper-button>
      </li>
      <li class="item up">
        <h5>Up Camera Focus</h5>
        <paper-button raised class="ctrl-btn" id="servo-57-pos">CCW</paper-button>
        <paper-button raised class="ctrl-btn" id="servo-57-neg">CW</paper-button>
      </li>
      <li class="item down">
        <h5>Down Camera Focus</h5>
        <paper-button raised class="ctrl-btn" id="servo-58-pos">CCW</paper-button>
        <paper-button raised class="ctrl-btn" id="servo-58-neg">CW</paper-button>
      </li>
      <li class="item side">
        <h5>Side Lights</h5>
        <input class="slider" id="light-66" type="range" min="0" max="1.0" step="0.05" value="0.0">
        <span id="light-66-val" class="sliderVal"></span>
      </li>
      <li class="item bore">
        <h5>Bore Lights</h5>
        <input class="slider" id="light-61" type="range" min="0" max="1.0" step="0.05" value="0.0">
        <span id="light-61-val" class="sliderVal"></span>
      </li>
      <li class="item forward">
        <h5>Forward Lights</h5>
        <input class="slider" id="light-62" type="range" min="0" max="1.0" step="0.05" value="0.0">
        <span id="light-62-val" class="sliderVal"></span>
      </li>
      <li class="item up">
        <h5>Up Lights</h5>
        <input class="slider" id="light-63" type="range" min="0" max="1.0" step="0.05" value="0.0">
        <span id="light-63-val" class="sliderVal"></span>
      </li>
      <li class="item down">
        <h5>Down Lights</h5>
        <input class="slider" id="light-65" type="range" min="0" max="1.0" step="0.05" value="0.0">
        <span id="light-65-val" class="sliderVal"></span>
      </li>
      <li class="item side">
        <h5>Side AutoExp</h5>
        <paper-button raised class="ctrl-btn autoexposure-211" id="autoexposure-211-1">ON</paper-button>
        <paper-button raised class="ctrl-btn autoexposure-211" id="autoexposure-211-0">OFF</paper-button>
      </li>
      <li class="item bore">
        <h5>Bore AutoExp</h5>
        <paper-button raised class="ctrl-btn autoexposure-213" id="autoexposure-213-1">ON</paper-button>
        <paper-button raised class="ctrl-btn autoexposure-213" id="autoexposure-213-0">OFF</paper-button>
      </li>
      <li class="item forward">
        <h5>Forward AutoExp</h5>
        <paper-button raised class="ctrl-btn autoexposure-215" id="autoexposure-215-1">ON</paper-button>
        <paper-button raised class="ctrl-btn autoexposure-215" id="autoexposure-215-0">OFF</paper-button>
      </li>
      <li class="item up">
        <h5>Up AutoExp</h5>
        <paper-button raised class="ctrl-btn autoexposure-217" id="autoexposure-217-1">ON</paper-button>
        <paper-button raised class="ctrl-btn autoexposure-217" id="autoexposure-217-0">OFF</paper-button>
      </li>
      <li class="item down">
        <h5>Down AutoExp</h5>
        <paper-button raised class="ctrl-btn autoexposure-218" id="autoexposure-218-1">ON</paper-button>
        <paper-button raised class="ctrl-btn autoexposure-218" id="autoexposure-218-0">OFF</paper-button>
      </li>
      <li class="item side">
        <h5>Side Defaults</h5>
        <a target="_blank" tabindex="-1" href="http://192.168.2.211/parsedit.php?immediate&AUTOEXP_ON=0&EXPOS=30000&QUALITY=70&BIN_HOR=4&BIN_VERT=4&DCM_HOR=4&DCM_VERT=4"><paper-button raised class="ctrl-btn large barbershop-pole" id="defaults-211-1"><p style="visibility: hidden;">DEFAULTS</p></paper-button></a>
      </li>
      <li class="item bore">
        <h5>Bore Defaults</h5>
        <a target="_blank" tabindex="-1" href="http://192.168.2.213/parsedit.php?immediate&AUTOEXP_ON=0&EXPOS=30000&QUALITY=70&BIN_HOR=4&BIN_VERT=4&DCM_HOR=4&DCM_VERT=4"><paper-button raised class="ctrl-btn large barbershop-pole" id="defaults-211-1"><p style="visibility: hidden;">DEFAULTS</p></paper-button></a>
      </li>
      <li class="item forward">
        <h5>Forward Defaults</h5>
        <a target="_blank" tabindex="-1" href="http://192.168.2.215/parsedit.php?immediate&AUTOEXP_ON=0&EXPOS=30000&QUALITY=70&BIN_HOR=2&BIN_VERT=2&DCM_HOR=2&DCM_VERT=2"><paper-button raised class="ctrl-btn large barbershop-pole" id="defaults-211-1"><p style="visibility: hidden;">DEFAULTS</p></paper-button></a>
      </li>
      <li class="item forward">
        <h5>Up Defaults</h5>
        <a target="_blank" tabindex="-1" href="http://192.168.2.217/parsedit.php?immediate&AUTOEXP_ON=0&EXPOS=30000&QUALITY=70&BIN_HOR=4&BIN_VERT=4&DCM_HOR=4&DCM_VERT=4"><paper-button raised class="ctrl-btn large barbershop-pole" id="defaults-211-1"><p style="visibility: hidden;">DEFAULTS</p></paper-button></a>
      </li>
      <li class="item down">
        <h5>Down Defaults</h5>
        <a target="_blank" tabindex="-1" href="http://192.168.2.218/parsedit.php?immediate&AUTOEXP_ON=0&EXPOS=30000&QUALITY=70&BIN_HOR=2&BIN_VERT=2&DCM_HOR=2&DCM_VERT=2&FLIPV=1&FLIPH=1"><paper-button raised class="ctrl-btn large barbershop-pole" id="defaults-211-1"><p style="visibility: hidden;">DEFAULTS</p></paper-button></a>
      </li>
      <li class="item manip">
        <h5>Trim Weight
        <span id="trim-24-status" class="sliderVal">Last: Unknown</span></h5>
        <paper-button raised class="ctrl-btn" id="trim-24-open">Fwd</paper-button>
        <paper-button raised class="ctrl-btn" id="trim-24-close">Aft</paper-button>
        <paper-button raised class="ctrl-btn" id="trim-24-stop">Stop</paper-button>
      </li>
      <li class="item manip">
        <h5>H2O Sampler
        <span id="waterSampler-21-status" class="sliderVal">Last: Unknown</span></h5>
        <paper-button raised class="ctrl-btn" id="waterSampler-21-close">Drain</paper-button>
        <paper-button raised class="ctrl-btn" id="waterSampler-21-open">Fill</paper-button>
        <paper-button raised class="ctrl-btn" id="waterSampler-21-stop">Stop</paper-button>
      </li>
      <li class="item manip">
        <h5>Gripper
        <span id="gripper-23-status" class="sliderVal">Last: Unknown</span></h5>
        <paper-button raised class="ctrl-btn" id="gripper-23-open">Close</paper-button>
        <paper-button raised class="ctrl-btn" id="gripper-23-close">Open</paper-button>
        <paper-button raised class="ctrl-btn" id="gripper-23-stop">Stop</paper-button>
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
