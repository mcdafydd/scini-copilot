/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html, LitElement } from 'lit-element';

import { SharedStyles } from './shared-styles.js';

class SciniAbout extends LitElement {
  render() {
    return html`
    ${SharedStyles}
      <style>
        :host {
          text-align: center;
          line-height: 1.5;
        }
        ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
      </style>
      <p>SCINI Pilot Progressive Web App</p>
      <ul>
        <li>
          <a target="_blank" tabindex="-1" href="https://salsa-antarctica.org/2018/11/11/getting-off-station-scini-team-tests-clump-weight-geophysics-team-camps-on-ice/">First Taste of the Field: SCINI Team Sea Ice Test & Geophysics “Deep Field Shakedown”</a>
        </li>
        <li>
          <a target="_blank" tabindex="-1" href="https://www.scientificamerican.com/article/discovery-fish-live-beneath-antarctica/">Discovery: Fish Live beneath Antarctica</a>
        </li>
        <li>
          <a target="_blank" tabindex="-1" href="https://desertstarsystems.nyc3.digitaloceanspaces.com/Published_Works/SouthStar/Cazenave%20Francois,%20Zook%20Robert,%20Carroll%20Dustin,%20Flagg%20Marco,%20Kim%20Stacy%20%E2%80%93%20Cazenave,%20Zook,%20Carroll,%20Flagg%20and%20Kim%20describe%20a%20compact,%20cost-effective%20ROV%20specifically%20designed%20for%20deployment%20through%20ice%20in%20remote%20regions.%20.pdf">The skinny on SCINI</a>
        </li>
        <li>
          <a target="_blank" tabindex="-1" href="https://antarcticsun.usap.gov/science/contenthandler.cfm?id=1779">SCINI in the Sound</a>
        </li>
        <li>
          <a target="_blank" tabindex="-1" href="https://www.elphel.com/blog/2010/08/scini-takes-elphel-under-antarctic-ice/">SCINI Takes Elphel Under Antarctic Ice</a>
        </li>
      </ul>
    `;
  }
}

window.customElements.define('scini-about', SciniAbout);
