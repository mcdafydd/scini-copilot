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
//import { initGrid } from '../shared-grid.js';
import { SharedStyles } from './shared-styles.js';
import './scini-chart.js';

class SciniTelemetry extends connect(store)(LitElement) {
  constructor() {
    super();
  }

  static get properties() {
    return {
    }
  }

  render() {
    return html`
      ${SharedStyles}

      <style>
        :host {
        }

        ul {
          padding: 0;
          list-style: none;
        }

        .container {
          display: grid;
          position: relative;
          height: 100%;
          width: 100%;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-template-rows: 2fr 2fr 2fr 2fr 2fr;
          grid-column-gap: 4px;
          grid-row-gap: 4px;
          justify-items: stretch;
          align-items: stretch;
        }

        .item {
        }

        @media (max-width: 648px) {
          :host {
          }
        }
      </style>
      <ul class="container">
        <li class="item"><scini-chart chartTitle="Server CPU" chartValueRef="cpu" chartProps="cpu" chartId="1"></scini-chart></li>
        <li class="item"><scini-chart chartTitle="Water Pressure (bar)" chartValueRef="depth_p" chartProps="board44.pressure.81" chartId="2"></scini-chart></li>
        <li class="item"><scini-chart chartTitle="Water Depth (m)" chartValueRef="depth_d" chartProps="board44.depth.81" chartId="3"></scini-chart></li>
        <li class="item"><scini-chart chartTitle="Water Temp (C)" chartValueRef="depth_t" chartProps="board44.temp.81" chartId="4"></scini-chart></li>
        <li class="item"><scini-chart chartTitle="ROV Tilt" chartValueRef="imu_p" chartProps="imu_p" chartId="5"></scini-chart></li>
        <li class="item"><scini-chart chartTitle="ROV Roll" chartValueRef="imu_r" chartProps="imu_r" chartId="6"></scini-chart></li>
        <li class="item"><scini-chart chartTitle="IMU Internal Pressure" chartValueRef="sensors.imuPressure" chartProps="sensors.imuPressure.51 pilot.imuPressure.52 sensors.imuPressure.57 sensors.imuPressure.58 sensors.imuPressure.67" chartId="7"></scini-chart></li>
        <li class="item"><scini-chart chartTitle="IMU Internal Temp" chartValueRef="sensors.imuTemp" chartProps="sensors.imuTemp.51 pilot.imuTemp.52 sensors.imuTemp.57 sensors.imuTemp.58 sensors.imuTemp.67" chartId="8"></scini-chart></li>
      </ul>
    `;
  }

  firstUpdated() {
    //initGrid('telemetryLayout');
  }

  stateChanged(state) {
  }
}

window.customElements.define('scini-telemetry', SciniTelemetry);
