import { html, LitElement } from '@polymer/lit-element'

class SimpleClock extends LitElement {
  constructor() {
    super();
    setInterval(this.clock.bind(this), 1000);
    this.time = '';
  }

  static get properties() {
    return {
      time: { type: String }
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
      </style>
      <div class="clock">${this.time}</div>
    `;
  }

  clock() { // We create a new Date object and assign it to a variable called "time".
    var time = new Date(),
      // Access the "getHours" method on the Date object with the dot accessor.
      hours = time.getHours(),
      // Access the "getMinutes" method with the dot accessor.
      minutes = time.getMinutes(),
      seconds = time.getSeconds();
      this.time = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

    function harold(standIn) {
      if (standIn < 10) {
        standIn = '0' + standIn
      }
      return standIn;
    }
  }
}

window.customElements.define('simple-clock', SimpleClock);
