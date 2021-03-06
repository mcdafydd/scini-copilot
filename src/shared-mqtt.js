import { store } from "./store";
import { updateCameraMap, updateTelemetry } from './actions/app.js';

export function initMqtt(mqttWorker, swCh) {
  mqttWorker.port.start();
  mqttWorker.port.postMessage({hostname: window.location.hostname});
  swCh.onmessage = (e) => {
    if (e.data.hasOwnProperty('log')) {
      console.log(`MQTT SharedWorker sent ${e.data.log}`);
    }
    if (e.data.hasOwnProperty('topic') && e.data.hasOwnProperty('payload')) {
      handleMessage(e.data.topic, e.data.payload);
    }
    if (e.data.hasOwnProperty('mqttConnected')) {
      let obj = { mqttConnected: e.data.mqttConnected };
      const event = new CustomEvent('mqttConnected', {
        bubbles: true,
        composed: true,
        detail: obj
      });
      window.dispatchEvent(event);
    }
  }
}

export function handleMessage(topic, payload) {
  if (topic.match('fromStreamer/.*/status') !== null) {
    let location = topic.split('/')[1];
    store.dispatch(updateCameraMap(location, 'streamer', JSON.parse(payload)));
  }
  else if (topic.match('fromCameraConfig/.*/status') !== null) {
    let location = topic.split('/')[1];
    store.dispatch(updateCameraMap(location, 'cameraConfig', JSON.parse(payload)));
  }
  else if (topic.match('telemetry/update') !== null) {
    let obj = JSON.parse(payload);
    store.dispatch(updateTelemetry(obj));
    //console.log(obj);
    let ts = new Date().getTime();
    let updateValues = {};
    var evtStatus = { mousedown: false, input: false };

    for (let prop in obj) {
      // limit big float precision
      if (!isNaN(parseFloat(obj[prop]))) {
        let temp = parseFloat(obj[prop]).toFixed(3);
        obj[prop] = temp;
      }
      // update text and slider or button
      else if (prop.match('light\.[0-9]+\.currentPower') !== null) {
        const [device, node, func] = prop.split('.');
        if (typeof getStatus !== "undefined")
          evtStatus = getStatus(`${device}-${node}`);
        if (!(evtStatus.mousedown || evtStatus.input)) {
          let display = document.getElementById(`${device}-${node}-val`);
          if (display !== null) {
            display.innerHTML = `Power: ${obj[prop]}`;
          }
          display = document.getElementById(`${device}-${node}`);
          if (display !== null) {
            display.value = obj[prop];
          }
        }
      }
      else if (prop.match('servo\.[0-9]+\.') !== null) {
        const [device, node, func] = prop.split('.');
        let display = document.getElementById(`${device}-${node}-${func}-val`);
        if (display !== null) {
          if (func === 'speed')
            display.innerHTML = `spd: ${obj[prop]}`;
          else if (func === 'center')
            display.innerHTML = `ctr: ${obj[prop]}`;
          else
            display.innerHTML = `${func}: ${obj[prop]}`;
        }
        display = document.getElementById(`${device}-${node}-${func}`);
        if (display !== null) {
          display.value = obj[prop];
        }
      }
      else if (prop.match('camera\.[0-9]+\.') !== null) {
        const [device, node, func] = prop.split('.');
        if (func !== 'exposure') {
          let display = document.getElementById(`${func}-${node}-${obj[prop]}`);
          if (display !== null) {
            let items = document.getElementsByClassName(`${func}-${node}`);
            for (let i=0; i<items.length; i++) {
              items[i].classList.remove('dot-current');
            }
            display.classList.add('dot-current');
          }
        }
        else {
          let slider = document.getElementById(`${func}-${node}`);
          let display = document.getElementById(`${func}-${node}-val`);
          let val = parseInt(obj[prop]);
          if (slider !== null) {
            try {
              if (val > slider.max)
                slider.value = slider.max;
              else
                slider.value = val;
            }
            catch (e) {
              console.warn('error setting slider exposure on ', prop);
            }
          }
          if (display !== null) {
            if (val > 125)
              display.style = "color: red;";
            else
              display.style = "";
            display.innerHTML = `Time: ${val}ms`;
          }
        }
      }
      else if (prop.match('[A-z]+\.cmdStatus\.[0-9]+') !== null) {
        const [device, func, node] = prop.split('.');
        let map = {
          0: 'Idle',
          1: 'Opening',
          2: 'Opening',
          3: 'Closing',
          4: 'Closing',
          5: 'Braking',
          6: 'Overcurrent',
          7: 'Fault'
        }
        let status = map[obj[prop]];
        if (status === undefined)
          status = 'Unknown';
        let display = document.getElementById(`${device}-${node}-status`);
        if (display !== null)
          display.innerHTML = `Last: ${status}`;
      }
      // update telemetry charts
      // if ${prop}-values in DOM, update numeric display
      let id = `${prop}-values`;
      let chartValues = document.getElementById(id);
      if (chartValues !== null) {
        // multi-value
        let nodeId = prop.match(/\.([0-9]+)$/)
        if (nodeId !== null) {
          if (!updateValues[id] instanceof Array)
            updateValues[id] = []
          let k = nodeId[1];
          let v = parseFloat(obj[prop]).toFixed(2);
          updateValues[id].push({k: v});
        }
        // single value
        else
          chartValues.innerHTML = parseFloat(obj[prop]).toFixed(2);
      }
      if (typeof appendToChart !== "undefined") {
        appendToChart(ts, prop, obj[prop]);
      }
      if (typeof updateBriefValues !== "undefined") {
        updateBriefValues(prop, obj[prop]);
      }

    }
    // process updateValues
    for (let id in updateValues) {
      let el = document.getElementById(id);
      if (el !== null && updateValues[id] instanceof Array) {
        let ih = '';
        for (let i=0; i<updateValues[id].length; i++) {
          let o = updateValues[id].shift();
          let k = Object.keys(o)[0];
          ih += k + ':' + o[k];
        }
      }
    }
  }
}
