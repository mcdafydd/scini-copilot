export function init() {
  initListeners();
  initKeyboardControls();
  initMqtt();

  SilentAudio();

  // Feature detect.
  this.shadowRoot.querySelector('.support').classList.toggle(
    'notsupported', !('OffscreenCanvas' in window));
}

export function SilentAudio(audioCtx) {
  audioCtx = audioCtx || new AudioContext();
  var source = audioCtx.createConstantSource();
  var gainNode = audioCtx.createGain();
  gainNode.gain.value = 0.001; // required to prevent popping on start
  source.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  source.start();
}

export function initWorker(canvas) {
  let workerPath = 'src/worker.js';
  const offscreen = canvas.transferControlToOffscreen();
  if (document.location.pathname.match('cameragl') !== null) {
    workerPath = 'src/worker-gl.js';
  }
  let worker = new Worker(workerPath);
  worker.onerror = (e) => {
    console.error(`Worker error: ${e}`);
  };
  worker.onmessage = (e) => {
    if (e.data.hasOwnProperty('command')) {
      console.log(`Received worker command = ${e.data.command}`);
      if (e.data.command === 'show') {
        let spinner = this.shadowRoot.querySelector('#camera-canvas-loader');
        spinner.classList.add('hidden');
        canvas.classList.remove('hidden'); // remove spinner class
      }
    }
  };

  worker.postMessage({ canvas: offscreen }, [offscreen]);

  // handle window close
  window.onbeforeunload = () => {
    worker.postMessage({
      command: 'close'
    });
  };
  return worker;
}

export function initKeyboardControls() {

  // bind controls
  Mousetrap.bind('shift+1', function (e) {
    sendCamera('resolution', '1');
  });
  Mousetrap.bind('shift+2', function (e) {
    sendCamera('resolution', '2');
  });
  Mousetrap.bind('shift+4', function (e) {
    sendCamera('resolution', '4');
  });
  Mousetrap.bind('shift+7', function (e) {
    sendCamera('quality', '80');
  });
  Mousetrap.bind('shift+8', function (e) {
    sendCamera('quality', '85');
  });
  Mousetrap.bind('shift+9', function (e) {
    sendCamera('quality', '92');
  });
  Mousetrap.bind('shift+0', function (e) {
    sendCamera('quality', '100');
  });
  Mousetrap.bind(['=', '+'], function (e) {
    sendCamera('exposure', '1');
  });
  Mousetrap.bind(['-', '_'], function (e) {
    sendCamera('exposure', '-1');
  });
  Mousetrap.bind('space', function (e) {
    sendCamera('snapFull', '1');
  });
}

export function sendCamera (func, value) {
  let port = this.cameraMap[this.lastCamera].port;
  let topic = 'toCamera/' + port + '/' + func;
  mqttWorker.port.postMessage({topic: topic, payload: value});
  console.debug('sendCamera', topic, value);
}
