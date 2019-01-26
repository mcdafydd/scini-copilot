let canvas, ctx, ws;
let img, tex, vloc, tloc, vertexBuff, texBuff, uLoc;

importScripts('deps/reconnecting-websocket-iife.min.js');

// create shaders
let vertexShaderSrc =
"attribute vec2 aVertex;" +
"attribute vec2 aUV;" +
"varying vec2 vTex;" +
"uniform vec2 pos;" +
"void main(void) {" +
"  gl_Position = vec4(aVertex + pos, 0.0, 1.0);" +
"  vTex = aUV;" +
"}";

let fragmentShaderSrc =
"precision highp float;" +
"varying vec2 vTex;" +
"varying vec2 transform;" +
"uniform sampler2D sampler0;" +
"void main(void){" +
"  gl_FragColor = texture2D(sampler0, vec2(vTex.x, -1.0*vTex.y));"+
"}";

function resize(ctx, width, height) {
  // Check if the canvas is not the same size.
  if (ctx.canvas.width  != width ||
      ctx.canvas.height != height) {

    // Make the canvas the same size
    ctx.canvas.width  = width;
    ctx.canvas.height = height;
  }

  ctx.viewport(0, 0, width, height);
}

this.addEventListener('message', (e) => {
  if (e.data.hasOwnProperty('canvas')) {
    canvas = e.data.canvas;
    ctx = canvas.getContext('webgl2', { 'powerPreference': 'high-performance' });
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

    // setup the webGL context
    setupGl();

    let wsUri = `ws://${e.data.hostname}:${e.data.wsPort}`;
    // Ref: https://github.com/pladaria/reconnecting-websocket
    ws = new ReconnectingWebSocket(wsUri);
    ws.onopen = () => {
      console.log("mjpg-streamer websocket connected");
      // give user indication of change in camera
      // canvas element must be visible to draw on it
      this.postMessage({'command': 'show'});
      //ctx.clearColor(0.0, 0.0, 0.0, 1.0);
      //ctx.clear(ctx.COLOR_BUFFER_BIT);
    };
    ws.onclose = () => {
      console.log("mjpg-streamer websocket disconnected");
    };
    ws.onmessage = (e) => {
      createImageBitmap(e.data)
      .then(img => {
        if (ctx) {
          tex = ctx.createTexture();
          ctx.bindTexture(ctx.TEXTURE_2D, tex);
          ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MIN_FILTER, ctx.NEAREST);
          ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MAG_FILTER, ctx.NEAREST);
          ctx.texImage2D(ctx.TEXTURE_2D, 0,  ctx.RGBA,  ctx.RGBA, ctx.UNSIGNED_BYTE, img);

          ctx.enableVertexAttribArray(vloc);
          ctx.bindBuffer(ctx.ARRAY_BUFFER, vertexBuff);
          ctx.vertexAttribPointer(vloc, 2, ctx.FLOAT, false, 0, 0);

          ctx.enableVertexAttribArray(tloc);
          ctx.bindBuffer(ctx.ARRAY_BUFFER, texBuff);
          ctx.bindTexture(ctx.TEXTURE_2D, tex);
          // Flip the image's Y axis to match the WebGL texture coordinate space.
          ctx.pixelStorei(ctx.UNPACK_FLIP_Y_WEBGL, true);
          ctx.vertexAttribPointer(tloc, 2, ctx.FLOAT, false, 0, 0);

          resize(ctx, img.width, img.height)
          ctx.drawArrays(ctx.TRIANGLE_FAN, 0, 4);
        }
      })
      .catch(err => {
        console.log(`Worker-gl createImageBitmap() error: ${err}`);
      });
    };
    ws.onerror = (e) => {
      console.error(`mjpg-streamer websocket error: ${e}`);
    };
  }
}, false);

function setupGl() {
  let vertShaderObj = ctx.createShader(ctx.VERTEX_SHADER);
  let fragShaderObj = ctx.createShader(ctx.FRAGMENT_SHADER);
  ctx.shaderSource(vertShaderObj, vertexShaderSrc);
  ctx.shaderSource(fragShaderObj, fragmentShaderSrc);
  ctx.compileShader(vertShaderObj);
  ctx.compileShader(fragShaderObj);

  let progObj = ctx.createProgram();
  ctx.attachShader(progObj, vertShaderObj);
  ctx.attachShader(progObj, fragShaderObj);

  ctx.linkProgram(progObj);
  ctx.useProgram(progObj);

  ctx.viewport(0, 0, ctx.canvas.width, ctx.canvas.height);

  vertexBuff = ctx.createBuffer();
  ctx.bindBuffer(ctx.ARRAY_BUFFER, vertexBuff);
  ctx.bufferData(ctx.ARRAY_BUFFER, new Float32Array([-1, 1, -1, -1, 1, -1, 1, 1]), ctx.STATIC_DRAW);

  texBuff = ctx.createBuffer();
  ctx.bindBuffer(ctx.ARRAY_BUFFER, texBuff);
  ctx.bufferData(ctx.ARRAY_BUFFER, new Float32Array([0, 1, 0, 0, 1, 0, 1, 1]), ctx.STATIC_DRAW);

  vloc = ctx.getAttribLocation(progObj, "aVertex");
  tloc = ctx.getAttribLocation(progObj, "aUV");
  uLoc = ctx.getUniformLocation(progObj, "pos");
}
