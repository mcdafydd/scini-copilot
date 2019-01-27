/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from 'lit-element';
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

        ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
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
          <paper-button raised @click="${() => this._eventHandler('camera', 'resolution', 'side', '4')}" class="ctrl-btn resolution-side" id="resolution-side-4">1/4</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'resolution', 'side', '2')}" class="ctrl-btn resolution-side" id="resolution-side-2">1/2</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'resolution', 'side', '1')}" class="ctrl-btn resolution-side" id="resolution-side-1">full</paper-button>
        </li>
        <li class="item bore">
          <h5 id="resolution-bore-title">Bore Resolution</h5>
          <paper-button raised @click="${() => this._eventHandler('camera', 'resolution', 'bore', '4')}" class="ctrl-btn resolution-bore" id="resolution-bore-4">1/4</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'resolution', 'bore', '2')}" class="ctrl-btn resolution-bore" id="resolution-bore-2">1/2</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'resolution', 'bore', '1')}" class="ctrl-btn resolution-bore" id="resolution-bore-1">full</paper-button>
        </li>
        <li class="item forward">
          <h5 id="resolution-forward-title">Forward Resolution</h5>
          <paper-button raised @click="${() => this._eventHandler('camera', 'resolution', 'forward', '4')}" class="ctrl-btn resolution-forward" id="resolution-forward-4">1/4</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'resolution', 'forward', '2')}" class="ctrl-btn resolution-forward" id="resolution-forward-2">1/2</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'resolution', 'forward', '1')}" class="ctrl-btn resolution-forward" id="resolution-forward-1">full</paper-button>
        </li>
        <li class="item up">
          <h5 id="resolution-up-title">Up Resolution</h5>
          <paper-button raised @click="${() => this._eventHandler('camera', 'resolution', 'up', '4')}" class="ctrl-btn resolution-up" id="resolution-up-4">1/4</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'resolution', 'up', '2')}" class="ctrl-btn resolution-up" id="resolution-up-2">1/2</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'resolution', 'up', '1')}" class="ctrl-btn resolution-up" id="resolution-up-1">full</paper-button>
        </li>
        <li class="item down">
          <h5 id="resolution-down-title">Down Resolution</h5>
          <paper-button raised @click="${() => this._eventHandler('camera', 'resolution', 'down', '4')}" class="ctrl-btn resolution-down" id="resolution-down-4">1/4</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'resolution', 'down', '2')}" class="ctrl-btn resolution-down" id="resolution-down-2">1/2</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'resolution', 'down', '1')}" class="ctrl-btn resolution-down" id="resolution-down-1">full</paper-button>
        </li>
        <li class="item side">
          <h5>Side Quality</h5>
          <paper-button raised @click="${() => this._eventHandler('camera', 'quality', 'side', '70')}" class="ctrl-btn quality-side" id="quality-side-70">70</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'quality', 'side', '80')}" class="ctrl-btn quality-side" id="quality-side-80">80</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'quality', 'side', '85')}" class="ctrl-btn quality-side" id="quality-side-85">85</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'quality', 'side', '92')}" class="ctrl-btn quality-side" id="quality-side-92">92</paper-button>
        </li>
        <li class="item bore">
          <h5 id="quality-bore-title">Bore Quality</h5>
          <paper-button raised @click="${() => this._eventHandler('camera', 'quality', 'bore', '70')}" class="ctrl-btn quality-bore" id="quality-bore-70">70</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'quality', 'bore', '80')}" class="ctrl-btn quality-bore" id="quality-bore-80">80</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'quality', 'bore', '85')}" class="ctrl-btn quality-bore" id="quality-bore-85">85</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'quality', 'bore', '92')}" class="ctrl-btn quality-side" id="quality-bore-92">92</paper-button>
        </li>
        <li class="item forward">
          <h5 id="quality-forward-title">Forward Quality</h5>
          <paper-button raised @click="${() => this._eventHandler('camera', 'quality', 'forward', '70')}" class="ctrl-btn quality-forward" id="quality-forward-70">70</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'quality', 'forward', '80')}" class="ctrl-btn quality-forward" id="quality-forward-80">80</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'quality', 'forward', '85')}" class="ctrl-btn quality-forward" id="quality-forward-85">85</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'quality', 'forward', '92')}" class="ctrl-btn quality-side" id="quality-forward-92">92</paper-button>
        </li>
        <li class="item up">
          <h5 id="quality-up-title">Up Quality</h5>
          <paper-button raised @click="${() => this._eventHandler('camera', 'quality', 'up', '70')}" class="ctrl-btn quality-up" id="quality-up-70">70</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'quality', 'up', '80')}" class="ctrl-btn quality-up" id="quality-up-80">80</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'quality', 'up', '85')}" class="ctrl-btn quality-up" id="quality-up-85">85</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'quality', 'up', '92')}" class="ctrl-btn quality-side" id="quality-up-92">92</paper-button>
        </li>
        <li class="item down">
          <h5 id="quality-down-title">Down Quality</h5>
          <paper-button raised @click="${() => this._eventHandler('camera', 'quality', 'down', '70')}" class="ctrl-btn quality-down" id="quality-down-70">70</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'quality', 'down', '80')}" class="ctrl-btn quality-down" id="quality-down-80">80</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'quality', 'down', '85')}" class="ctrl-btn quality-down" id="quality-down-85">85</paper-button>
          <paper-button raised @click="${() => this._eventHandler('camera', 'quality', 'down', '92')}" class="ctrl-btn quality-side" id="quality-down-92">92</paper-button>
        </li>
        <li class="item side">
          <h5 id="exposure-side-title">Side Exposure</h5>
          <input @change="${() => this._eventHandler('camera', 'exposure', 'side')}" class="slider" id="exposure-side" type="range" min="1.0" max="125" step="1.0" value="30">
          <span id="exposure-side-val" class="sliderVal"></span>
        </li>
        <li class="item bore">
          <h5 id="exposure-bore-title">Bore Exposure</h5>
          <input @change="${() => this._eventHandler('camera', 'exposure', 'bore')}" class="slider" id="exposure-bore" type="range" min="1.0" max="125" step="1.0" value="30">
          <span id="exposure-bore-val" class="sliderVal"></span>
        </li>
        <li class="item forward">
          <h5 id="exposure-forward-title">Forward Exposure</h5>
          <input @change="${() => this._eventHandler('camera', 'exposure', 'forward')}" class="slider" id="exposure-forward" type="range" min="1.0" max="125" step="1.0" value="30">
          <span id="exposure-forward-val" class="sliderVal"></span>
        </li>
        <li class="item up">
          <h5 id="exposure-up-title">Up Exposure</h5>
          <input @change="${() => this._eventHandler('camera', 'exposure', 'up')}" class="slider" id="exposure-up" type="range" min="1.0" max="125" step="1.0" value="30">
          <span id="exposure-up-val" class="sliderVal"></span>
        </li>
        <li class="item down">
          <h5 id="exposure-down-title">Down Exposure</h5>
          <input @change="${() => this._eventHandler('camera', 'exposure', 'down')}" class="slider" id="exposure-down" type="range" min="1.0" max="125" step="1.0" value="30">
          <span id="exposure-down-val" class="sliderVal"></span>
        </li>
        <li class="item side">
          <h5>Side Snap</h5>
          <paper-button raised @click="${() => this._eventHandler('camera', 'snap', 'side', '1')}" class="ctrl-btn large" id="snapFull-side-1"><p style="visibility: hidden;">SNAP</p></paper-button>
        </li>
        <li class="item bore">
          <h5>Bore Snap</h5>
          <paper-button raised @click="${() => this._eventHandler('camera', 'snap', 'bore', '1')}" class="ctrl-btn large" id="snapFull-bore-1"><p style="visibility: hidden;">SNAP</p></paper-button>
        </li>
        <li class="item forward">
          <h5>Forward Snap</h5>
          <paper-button raised @click="${() => this._eventHandler('camera', 'snap', 'forward', '1')}" class="ctrl-btn large" id="snapFull-forward-1"><p style="visibility: hidden;">SNAP</p></paper-button>
        </li>
        <li class="item up">
          <h5>Up Snap</h5>
          <paper-button raised @click="${() => this._eventHandler('camera', 'snap', 'up', '1')}" class="ctrl-btn large" id="snapFull-up-1"><p style="visibility: hidden;">SNAP</p></paper-button>
        </li>
        <li class="item down">
          <h5>Down Snap</h5>
          <paper-button raised @click="${() => this._eventHandler('camera', 'snap', 'down', '1')}" class="ctrl-btn large" id="snapFull-down-1"><p style="visibility: hidden;">SNAP</p></paper-button>
        </li>
      <li class="item side">
        <h5>Side Servo Settings</h5>
        <input @change="${() => this._eventHandler('servo', 'servo', 'side')}" class="slider-servo" id="servo-51-center" type="range" min="0" max="65535" step="100" value="48000">
        <span id="servo-51-center-val" class="sliderVal"></span>
        <input @change="${() => this._eventHandler('servo', 'servo', 'side')}" class="slider-servo" id="servo-51-speed" type="range" min="0" max="32768" step="100" value="2000">
        <span id="servo-51-speed-val" class="sliderVal"></span>
      </li>
      <li class="item bore">
        <h5>Bore Servo Settings</h5>
        <input @change="${() => this._eventHandler('servo', 'servo', 'bore')}" class="slider-servo" id="servo-67-center" type="range" min="0" max="65535" step="100" value="32768">
        <span id="servo-67-center-val" class="sliderVal"></span>
        <input @change="${() => this._eventHandler('servo', 'servo', 'bore')}" class="slider-servo" id="servo-67-speed" type="range" min="0" max="32768" step="100" value="2000">
        <span id="servo-67-speed-val" class="sliderVal"></span>
      </li>
      <li class="item forward">
        <h5>Forward Servo Settings</h5>
        <input @change="${() => this._eventHandler('servo', 'servo', 'forward')}" class="slider-servo" id="servo-52-center" type="range" min="0" max="65535" step="100" value="37000">
        <span id="servo-52-center-val" class="sliderVal"></span>
        <input @change="${() => this._eventHandler('servo', 'servo', 'forward')}" class="slider-servo" id="servo-52-speed" type="range" min="0" max="32768" step="100" value="9500">
        <span id="servo-52-speed-val" class="sliderVal"></span>
      </li>
      <li class="item up">
        <h5>Up Servo Settings</h5>
        <input @change="${() => this._eventHandler('servo', 'servo', 'up')}" class="slider-servo" id="servo-57-center" type="range" min="0" max="65535" step="100" value="32768">
        <span id="servo-57-center-val" class="sliderVal"></span>
        <input @change="${() => this._eventHandler('servo', 'servo', 'up')}" class="slider-servo" id="servo-57-speed" type="range" min="0" max="32768" step="100" value="2000">
        <span id="servo-57-speed-val" class="sliderVal"></span>
      </li>
      <li class="item down">
        <h5>Down Servo Settings</h5>
        <input @change="${() => this._eventHandler('servo', 'servo', 'down')}" class="slider-servo" id="servo-58-center" type="range" min="0" max="65535" step="100" value="46200">
        <span id="servo-58-center-val" class="sliderVal"></span>
        <input @change="${() => this._eventHandler('servo', 'servo', 'down')}" class="slider-servo" id="servo-58-speed" type="range" min="0" max="32768" step="100" value="2000">
        <span id="servo-58-speed-val" class="sliderVal"></span>
      </li>
      <li class="item side">
        <h5>Side Camera Focus</h5>
        <paper-button raised @click="${() => this._eventHandler('camera', 'focus', 'side', 'pos')}" class="ctrl-btn" id="servo-51-pos">CCW</paper-button>
        <paper-button raised @click="${() => this._eventHandler('camera', 'focus', 'side', 'neg')}" class="ctrl-btn" id="servo-51-neg">CW</paper-button>
      </li>
      <li class="item bore">
        <h5>Bore Camera Focus</h5>
        <paper-button raised @click="${() => this._eventHandler('camera', 'focus', 'bore', 'pos')}" class="ctrl-btn" id="servo-67-pos">CCW</paper-button>
        <paper-button raised @click="${() => this._eventHandler('camera', 'focus', 'bore', 'neg')}" class="ctrl-btn" id="servo-67-neg">CW</paper-button>
      </li>
      <li class="item forward">
        <h5>Forward Camera Focus</h5>
        <paper-button raised @click="${() => this._eventHandler('camera', 'focus', 'forward', 'pos')}" class="ctrl-btn" id="servo-52-pos">CCW</paper-button>
        <paper-button raised @click="${() => this._eventHandler('camera', 'focus', 'forward', 'neg')}" class="ctrl-btn" id="servo-52-neg">CW</paper-button>
      </li>
      <li class="item up">
        <h5>Up Camera Focus</h5>
        <paper-button raised @click="${() => this._eventHandler('camera', 'focus', 'up', 'pos')}" class="ctrl-btn" id="servo-57-pos">CCW</paper-button>
        <paper-button raised @click="${() => this._eventHandler('camera', 'focus', 'up', 'neg')}" class="ctrl-btn" id="servo-57-neg">CW</paper-button>
      </li>
      <li class="item down">
        <h5>Down Camera Focus</h5>
        <paper-button raised @click="${() => this._eventHandler('camera', 'focus', 'down', 'pos')}" class="ctrl-btn" id="servo-58-pos">CCW</paper-button>
        <paper-button raised @click="${() => this._eventHandler('camera', 'focus', 'down', 'neg')}" class="ctrl-btn" id="servo-58-neg">CW</paper-button>
      </li>
      <li class="item side">
        <h5>Side Lights</h5>
        <input @change="${() => this._eventHandler('light', '66', 'side')}" class="slider" id="light-66" type="range" min="0" max="1.0" step="0.05" value="0.0">
        <span id="light-66-val" class="sliderVal"></span>
      </li>
      <li class="item bore">
        <h5>Bore Lights</h5>
        <input @change="${() => this._eventHandler('light', '61', 'bore')}" class="slider" id="light-61" type="range" min="0" max="1.0" step="0.05" value="0.0">
        <span id="light-61-val" class="sliderVal"></span>
      </li>
      <li class="item forward">
        <h5>Forward Lights</h5>
        <input @change="${() => this._eventHandler('light', '62', 'forward')}" class="slider" id="light-62" type="range" min="0" max="1.0" step="0.05" value="0.0">
        <span id="light-62-val" class="sliderVal"></span>
      </li>
      <li class="item up">
        <h5>Up Lights</h5>
        <input @change="${() => this._eventHandler('light', '63', 'up')}" class="slider" id="light-63" type="range" min="0" max="1.0" step="0.05" value="0.0">
        <span id="light-63-val" class="sliderVal"></span>
      </li>
      <li class="item down">
        <h5>Down Lights</h5>
        <input @change="${() => this._eventHandler('light', '65', 'down')}" class="slider" id="light-65" type="range" min="0" max="1.0" step="0.05" value="0.0">
        <span id="light-65-val" class="sliderVal"></span>
      </li>
      <li class="item side">
        <h5>Side AutoExp</h5>
        <paper-button raised @click="${() => this._eventHandler('camera', 'autoexposure', 'side', '1')}" class="ctrl-btn autoexposure-side" id="autoexposure-side-1">ON</paper-button>
        <paper-button raised @click="${() => this._eventHandler('camera', 'autoexposure', 'side', '0')}" class="ctrl-btn autoexposure-side" id="autoexposure-side-0">OFF</paper-button>
      </li>
      <li class="item bore">
        <h5>Bore AutoExp</h5>
        <paper-button raised @click="${() => this._eventHandler('camera', 'autoexposure', 'bore', '1')}" class="ctrl-btn autoexposure-bore" id="autoexposure-bore-1">ON</paper-button>
        <paper-button raised @click="${() => this._eventHandler('camera', 'autoexposure', 'bore', '0')}" class="ctrl-btn autoexposure-bore" id="autoexposure-bore-0">OFF</paper-button>
      </li>
      <li class="item forward">
        <h5>Forward AutoExp</h5>
        <paper-button raised @click="${() => this._eventHandler('camera', 'autoexposure', 'forward', '1')}" class="ctrl-btn autoexposure-forward" id="autoexposure-forward-1">ON</paper-button>
        <paper-button raised @click="${() => this._eventHandler('camera', 'autoexposure', 'forward', '0')}" class="ctrl-btn autoexposure-forward" id="autoexposure-forward-0">OFF</paper-button>
      </li>
      <li class="item up">
        <h5>Up AutoExp</h5>
        <paper-button raised @click="${() => this._eventHandler('camera', 'autoexposure', 'up', '1')}" class="ctrl-btn autoexposure-up" id="autoexposure-up-1">ON</paper-button>
        <paper-button raised @click="${() => this._eventHandler('camera', 'autoexposure', 'up', '0')}" class="ctrl-btn autoexposure-up" id="autoexposure-up-0">OFF</paper-button>
      </li>
      <li class="item down">
        <h5>Down AutoExp</h5>
        <paper-button raised @click="${() => this._eventHandler('camera', 'autoexposure', 'down', '1')}" class="ctrl-btn autoexposure-down" id="autoexposure-down-1">ON</paper-button>
        <paper-button raised @click="${() => this._eventHandler('camera', 'autoexposure', 'down', '0')}" class="ctrl-btn autoexposure-down" id="autoexposure-down-0">OFF</paper-button>
      </li>
      <li class="item side">
        <h5>Side Defaults</h5>
        <paper-button raised @click="${() => this._eventHandler('camera', 'defaults', 'side', '1')}" class="ctrl-btn large barbershop-pole" id="defaults-side-1"><p style="visibility: hidden;">DEFAULTS</p></paper-button>
      </li>
      <li class="item bore">
        <h5>Bore Defaults</h5>
        <paper-button raised @click="${() => this._eventHandler('camera', 'defaults', 'bore', '1')}" class="ctrl-btn large barbershop-pole" id="defaults-side-1"><p style="visibility: hidden;">DEFAULTS</p></paper-button>
      </li>
      <li class="item forward">
        <h5>Forward Defaults</h5>
        <paper-button raised @click="${() => this._eventHandler('camera', 'defaults', 'forward', '1')}" class="ctrl-btn large barbershop-pole" id="defaults-side-1"><p style="visibility: hidden;">DEFAULTS</p></paper-button>
      </li>
      <li class="item forward">
        <h5>Up Defaults</h5>
        <paper-button raised @click="${() => this._eventHandler('camera', 'defaults', 'up', '1')}" class="ctrl-btn large barbershop-pole" id="defaults-side-1"><p style="visibility: hidden;">DEFAULTS</p></paper-button>
      </li>
      <li class="item down">
        <h5>Down Defaults</h5>
        <paper-button raised @click="${() => this._eventHandler('camera', 'defaults', 'down', '1')}" class="ctrl-btn large barbershop-pole" id="defaults-side-1"><p style="visibility: hidden;">DEFAULTS</p></paper-button>
      </li>
      <li class="item manip">
        <h5>Trim Weight
        <span id="trim-24-status" class="sliderVal">Last: Unknown</span></h5>
        <paper-button raised @click="${() => this._eventHandler('gripper', 'trim', '24', 'open')}" class="ctrl-btn" id="trim-24-open">Fwd</paper-button>
        <paper-button raised @click="${() => this._eventHandler('gripper', 'trim', '24', 'close')}" class="ctrl-btn" id="trim-24-close">Aft</paper-button>
        <paper-button raised @click="${() => this._eventHandler('gripper', 'trim', '24', 'stop')}" class="ctrl-btn" id="trim-24-stop">Stop</paper-button>
      </li>
      <li class="item manip">
        <h5>H2O Sampler
        <span id="waterSampler-21-status" class="sliderVal">Last: Unknown</span></h5>
        <paper-button raised @click="${() => this._eventHandler('gripper', 'waterSampler', '21', 'close')}" class="ctrl-btn" id="waterSampler-21-close">Drain</paper-button>
        <paper-button raised @click="${() => this._eventHandler('gripper', 'waterSampler', '21', 'open')}" class="ctrl-btn" id="waterSampler-21-open">Fill</paper-button>
        <paper-button raised @click="${() => this._eventHandler('gripper', 'waterSampler', '21', 'stop')}" class="ctrl-btn" id="waterSampler-21-stop">Stop</paper-button>
      </li>
      <li class="item manip">
        <h5>Gripper
        <span id="gripper-23-status" class="sliderVal">Last: Unknown</span></h5>
        <paper-button raised @click="${() => this._eventHandler('gripper', 'gripper', '23', 'open')}" class="ctrl-btn" id="gripper-23-open">Close</paper-button>
        <paper-button raised @click="${() => this._eventHandler('gripper', 'gripper', '23', 'close')}" class="ctrl-btn" id="gripper-23-close">Open</paper-button>
        <paper-button raised @click="${() => this._eventHandler('gripper', 'gripper', '23', 'stop')}" class="ctrl-btn" id="gripper-23-stop">Stop</paper-button>
      </li>
      </ul>
    `;
  }

  _eventHandler(type, func, id, value) {
    let obj = {};

    if (type === 'camera') {
      obj.topic = `toCameraConfig/${id}/${func}`;
      obj.value = value;
    }
    else if (type === 'gripper') {
      obj.topic = `gripper/${id}`;
      obj.value = value;
    }
    else if (type === 'light') {
      obj.topic = `light/${id}`;
      obj.value = value;
    }
    else if (type === 'servo') {
      obj.topic = `servo/${id}/${func}`;
      obj.value = value;
    }

    const event = new CustomEvent('mqttPublish', {
      bubbles: true,
      composed: true,
      detail: obj
    });
    this.dispatchEvent(event);
    console.debug('_eventHandler', type, obj.topic, obj.value);
  }
}

window.customElements.define('scini-controls', SciniControls);
