let canvas, ctx, ws, reopen;

importScripts('deps/reconnecting-websocket-iife.min.js');

this.addEventListener('message', (e) => {
  if (e.data.hasOwnProperty('canvas')) {
    canvas = e.data.canvas;
    ctx = canvas.getContext('2d');
  }
  else if (e.data.hasOwnProperty('command')) {
    if (e.data.command === 'close' && ws instanceof ReconnectingWebSocket) {
      // disable handlers and close any open websocket connections
      ws.onmessage = () => {};
      ws.close();
    }
  }
  else if (e.data.hasOwnProperty('hostname') &&
             e.data.hasOwnProperty('wsPort')) {

    let wsUri = `ws://${e.data.hostname}:${e.data.wsPort}`;
    console.log(`mjpg-streamer worker reconnecting to ${wsUri}`);

    // Ref: https://github.com/pladaria/reconnecting-websocket
    ws = new ReconnectingWebSocket(wsUri);
    ws.onopen = () => {
      console.log("mjpg-streamer websocket connected");
      this.postMessage({'command': 'show'});
      // give user indication of change in camera
      // canvas element must be visible to draw on it
      ctx.beginPath();
      ctx.rect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fill();
    };
    ws.onclose = () => {
      console.log("mjpg-streamer websocket disconnected");
    };
    ws.onmessage = (e) => {
      createImageBitmap(e.data)
      .then(img => {
        if (ctx) {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
      })
      .catch(err => {
        console.log(`Worker createImageBitmap() error: ${err}`);
      });
    };
    ws.onerror = (e) => {
      console.error(`mjpg-streamer websocket error: ${e.error}`);
    };
  }
}, false);
