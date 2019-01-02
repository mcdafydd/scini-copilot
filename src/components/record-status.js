import { html, LitElement } from '@polymer/lit-element'

class RecordStatus extends LitElement {
  constructor() {
    super();
    this.ip = ['211', '213', '215', '217', '218'];
    this.location = {
      '211': 'Side',
      '213': 'Bore',
      '215': 'Forward',
      '217': 'Up',
      '218': 'Down'
    };
  }

  static get properties() {
    return {
      location: { type: Object },
      ip: { type: Array }
    }
  }

  render() {
    return html`
      <style>
        :host {
          padding: 16px;
          text-align: center;
          line-height: 1.5;
        }

        li {
          float: left;
        }

        li:last-child {
          float: right;
        }

        li a {
          display: block;
          color: white;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
        }

        li a:hover:not(.active) {
          background-color: #111;
        }
      </style>
      ${this.ip.map(v => html`<li><span class="dot" id="video-${v}-record"><span class="tooltiptext">${this.location[v]}</span></span></li>`)}
    `;
  }
}

window.customElements.define('record-status', RecordStatus);
