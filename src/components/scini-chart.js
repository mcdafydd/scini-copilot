import { html, LitElement } from '@polymer/lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js';

import { store } from '../store.js';
class SciniChart extends connect(store)(LitElement) {
  constructor() {
    super();
    this.chartId = 999;
    this.chartPropLabels = [];
    this.chartProps = '';
    this.chartTitle = '';
    this.chartValueRef = '';
    this.dataMap = {};
    this.lengthInSec = 180;
  }

  static get properties() {
    return {
      chartId: { type: Number },
      chartPropLabels: { type: Array },
      chartProps: { type: String },
      chartTitle: { type: String },
      chartValueRef: { type: String },
      lengthInSec: { type: Number }
    }
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
          padding: 4px;
          text-align: center;
          line-height: 1.5;
        }

        div.smoothie-chart-tooltip {
          background: #444;
          padding: 1em;
          margin-top: 20px;
          font-family: Consolas, monospace;
          color: white;
          font-size: 18px;
          pointer-events: none;
          z-index: 4;
        }
        canvas {
          width: 100%;
          height: 100%;
        }
      </style>
      <div class="item-content" data-id="${this.chartId}">
        <h5>${this.chartTitle}</h5>
        <canvas id="${this.chartValueRef}"></canvas>
      </div>
    `;
  }

  firstUpdated() {
    let props = this.chartProps.split(' ');
    this.initChart(this.chartValueRef, props, this.lengthInSec, this.chartPropLabels);
  }

  updated() {
    let props = this.chartProps.split(' ');
    //this.initChart(this.chartValueRef, props, this.lengthInSec, this.chartPropLabels);
  }

  appendToChart(ts, prop, value) {
    if (this.dataMap.hasOwnProperty(prop)) {
      this.dataMap[prop].append(ts, value);
    }
  }

  initChart(chartName, properties, lengthInSec, labels) {
    var seriesOptions = [
      {
        strokeStyle: 'rgba(255, 0, 0, 1)',
        fillStyle: 'rgba(255, 0, 0, 0.1)',
        lineWidth: 3
      },
      {
        strokeStyle: 'rgba(0, 255, 0, 1)',
        fillStyle: 'rgba(0, 255, 0, 0.1)',
        lineWidth: 3
      },
      {
        strokeStyle: 'rgba(0, 0, 255, 1)',
        fillStyle: 'rgba(0, 0, 255, 0.1)',
        lineWidth: 3
      },
      {
        strokeStyle: 'rgba(255, 255, 0, 1)',
        fillStyle: 'rgba(255, 255, 0, 0.1)',
        lineWidth: 3
      },
      {
        strokeStyle: 'rgba(128, 128, 128, 1)',
        fillStyle: 'rgba(128, 128, 128, 0.1)',
        lineWidth: 3
      },
      {
        strokeStyle: 'rgba(0, 255, 255, 1)',
        fillStyle: 'rgba(0, 255, 255, 0.1)',
        lineWidth: 3
      },
      {
        strokeStyle: 'rgba(255, 0, 255, 1)',
        fillStyle: 'rgba(255, 0, 255, 0.1)',
        lineWidth: 3
      },
      {
        strokeStyle: 'rgba(64, 128, 128, 1)',
        fillStyle: 'rgba(64, 128, 128, 0.1)',
        lineWidth: 3
      }
    ];

    var psOptions = [
      {
        strokeStyle: 'rgba(255, 255, 0, 1)',
        fillStyle: 'rgba(255, 255, 0, 0.1)',
        lineWidth: 3
      },
      {
        strokeStyle: 'rgba(0, 0, 255, 1)',
        fillStyle: 'rgba(0, 0, 255, 0.1)',
        lineWidth: 3
      },
      {
        strokeStyle: 'rgba(255, 165, 0, 1)',
        fillStyle: 'rgba(255, 165, 0, 0.1)',
        lineWidth: 3
      },
      {
        strokeStyle: 'rgba(255, 0, 0, 1)',
        fillStyle: 'rgba(255, 0, 0, 0.1)',
        lineWidth: 3
      }
    ];

    var camOptions = [
      {
        strokeStyle: 'rgba(255, 0, 0, 1)',
        fillStyle: 'rgba(255, 0, 0, 0.1)',
        lineWidth: 3
      },
      {
        strokeStyle: 'rgba(0, 255, 0, 1)',
        fillStyle: 'rgba(0, 255, 0, 0.1)',
        lineWidth: 3
      },
      {
        strokeStyle: 'rgba(255, 255, 0, 1)',
        fillStyle: 'rgba(255, 255, 0, 0.1)',
        lineWidth: 3
      },
      {
        strokeStyle: 'rgba(246, 129, 33, 1)',
        fillStyle: 'rgba(246, 129, 33, 0.1)',
        lineWidth: 3
      }
    ];
    let numLines = 1;
    if (Array.isArray(properties)) {
      // Array length must match highest initChart() numLines parameter
      if (properties.length <= seriesOptions.length && properties.length > 0) {
        numLines = properties.length;
      }
      else {
        console.error(`scini-chart: too many or bad properties value - setting to ${seriesOptions.length}`);
        numLines = seriesOptions.length;
      }
    }
    // Build the chart object
    var millis = (lengthInSec*1000)/this.clientWidth;
    var timeline = new SmoothieChart({
      millisPerPixel: 500,
      responsive: true,
      tooltip: true,
      grid: {
        strokeStyle: '#555555',
        lineWidth: 1,
        millisPerLine: 20000,
        verticalSections: 4,
      }
    });

    for (var i = 0; i < numLines; i++) {
      let series = new TimeSeries();
      let options = seriesOptions[i];
      if (chartName.match(/powerSupply.*/) !== null) {
        options = psOptions[i];
        if (labels[i] === undefined) {
          let tooltips = properties[i].split(/\./);
          options.tooltipLabel = tooltips[tooltips.length-1];
        }
        else {
          options.tooltipLabel = labels[i];
        }
      }
      else if (chartName.match(/mqtt.*/) !== null) {
        options = camOptions[i];
        if (labels[i] === undefined) {
          let tooltips = properties[i].split(/\./);
          options.tooltipLabel = tooltips[tooltips.length-1];
        }
        else {
          options.tooltipLabel = labels[i];
        }
      }
      else if (properties[i].match(/\.[0-9]+$/) !== null) {
        let tooltips = properties[i].split(/\./);
        options.tooltipLabel = tooltips[tooltips.length-1];
      }
      this.dataMap[properties[i]] = series;
      timeline.addTimeSeries(series, options);
    }
    timeline.streamTo(this.shadowRoot.getElementById(chartName), 1000);
  }

  stateChanged(state) {
    if (state.app.hasOwnProperty('telemetry')) {
      let ts = new Date().getTime();
      let obj = state.app.telemetry;
      for (let prop in obj) {
        // limit big float precision
        if (!isNaN(parseFloat(obj[prop]))) {
          let temp = parseFloat(obj[prop]).toFixed(3);
          obj[prop] = temp;
        }
        this.appendToChart(ts, prop, obj[prop]);
      }
    }
  }
}

window.customElements.define('scini-chart', SciniChart);