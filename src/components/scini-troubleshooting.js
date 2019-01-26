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

import { SharedStyles } from './shared-styles.js';

class SciniTroubleshooting extends LitElement {
  constructor() {
    super();
    this.data = this.getData();
    this.locTable = [];
    this.pro4Table = [];
  }

  static get properties() {
    return {
      data: { type: Object },
      locTable: { type: Array },
      pro4Table: { type: Array }
    };
  }

  render() {
    return html`
      ${SharedStyles}
      <section>
        <h1>Address Tables</h1>
        <div id="data-locations">${this.locTable}</div>
        <div id="data-pro4">${this.pro4Table}</div>
      </section>
      <section>
        <h1>How to Stop/Start Recording</h1>
        ** This process will be updated as soon as possible **
        <ol>
          <li>Go to the <a href="http://192.168.2.2">OpenROV Cockpit interface</a> - make sure the indicator in the top bar is <b style="color:green;">green</b> not <b style="color:red;">red</b>  - if it's red, find out who still has Cockpit open and follow this process on that computer</li>
          <li>Click the square dot icon in the upper right corner</li>
          <li>In the pop-up menu, click Settings</li>
          <li>Click Video</li>
          <li>Find "RecordOnServer" and set the value to True - if it's already True, video should be recording on the server</li>
        </ol>
      </section>
      <section>
        <h1 id="no-video">No video</h1>
        Make sure each step passes before proceeding.
        <ol>
          <li>The video tabs require Chrome v69+.  You have <b id="browser"></b></li>
          <li>Make sure cameras are reachable from the surface.  You should see a single image open in a new tab by clicking the <a href="#ping">ping buttons above for each camera</a>.  If one fails, check that camera.  If they all fail, there may be a network connectivity problem with the ROV.</li>

          <li>Restart the mjpg_streamer processes by clicking the button.<button id="video-restart-2" class="video-restart">Restart video streamers</button></li>
          <li>Try reducing resolution to 1/4 or 1/2 on problematic cameras from the controls tab.</li>
          <li>Try resetting the camera directly from it's native control page.</li>
        </ol>
      </section>
    `
  }

  getData() {
    return fetch(window.location.origin+'/src/data.json')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then((obj) => {
      this.createLocTable(obj.locations);
      this.createPro4Table(obj.pro4);
    })
    .catch(e => {
      console.error(`Error in getData(): ${e}`);
      return {};
    });
  }

  createLocTable(obj) {
    this.locTable = [];
    let header = html`<table border="1">
      <th class="tg-0lax"><em>Location</em></th>
      <th class="tg-0lax"><em>IP</em></th>
      <th class="tg-0lax"><em>Master</em></th>
      <th class="tg-0lax"><em>Crumb</em></th>
      <th class="tg-0lax"><em>Light</em></th>
      <th class="tg-0lax"><em>Focus</em></th>
      <th class="tg-0lax"><em>Mic</em></th>`;
    this.locTable.push(header);
    for (let prop in obj) {
      this.locTable.push(html`
        <tr style="color: ${obj[prop].color};"}><td>${prop}</td>
        <td>${obj[prop].ip}</td>
        <td>${obj[prop].master}</td>
        <td>${obj[prop].crumb}</td>
        <td>${obj[prop].light}</td>
        <td>${obj[prop].focus}</td>
        <td>${obj[prop].mic}</td></tr>
      `);
    }
    this.locTable.push(html`</table>`);
  }

  createPro4Table(obj) {
    this.pro4Table = [];
    let t = Object.keys(obj.thrusters);
    let d = Object.keys(obj.devices);

    let maxRows = 6;

    let header = html`<table border="1">;
      <th class="tg-0lax"><em>Thruster</em></th>
      <th class="tg-0lax"><em>Pro4 ID</em></th>
      <th class="tg-0lax"><em>Device</em></th>
      <th class="tg-0lax"><em>Pro4 ID</em></th>`;
    this.pro4Table.push(header);
    for (let i=0; i < maxRows; i++) {
      this.pro4Table.push(html`
        <tr><td>${t[i]}</td>
        <td>${obj.thrusters[t[i]]}</td>
        <td>${d[i]}</td>
        <td>${obj.devices[d[i]]}</td></tr>`);
    }
    this.pro4Table.push(html`</table>`);
  //txt = txt.replace(/undefined/g, '');
  }
}

function initListeners() {
  const buttons = document.getElementsByClassName('video-restart');
  for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      console.log('sending video restart');
      let topic = 'video/restart';
      mqttWorker.port.postMessage({topic: topic, payload: '1'});
    }, false);
  }
}

window.customElements.define('scini-troubleshooting', SciniTroubleshooting);
