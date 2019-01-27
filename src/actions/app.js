/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

export const UPDATE_PAGE = 'UPDATE_PAGE';
export const UPDATE_OFFLINE = 'UPDATE_OFFLINE';
export const UPDATE_WIDE_LAYOUT = 'UPDATE_WIDE_LAYOUT';
export const UPDATE_DRAWER_STATE = 'UPDATE_DRAWER_STATE';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const UPDATE_CAMERA_CONFIG = 'UPDATE_CAMERA_CONFIG';
export const UPDATE_STREAMER = 'UPDATE_STREAMER';
export const UPDATE_TELEMETRY = 'UPDATE_TELEMETRY';

export const navigate = (location) => (dispatch) => {
  // Extract the page name from path.
  // Any other info you might want to extract from the path (like page type),
  // you can do here.
  const pathname = location.pathname;
  const parts = pathname.slice(1).split('/');
  const page = parts[0] || 'home';

  dispatch(loadPage(page));
};

const loadPage = (page) => async (dispatch, getState) => {
  let module;
  switch(page) {
    case 'home':
      module = await import('../components/scini-camera.js');
      break;
    case 'camera':
      module = await import('../components/scini-camera.js');
      break;
    case 'controls':
      module = await import('../components/scini-controls.js');
      break;
    case 'telemetry':
      module = await import('../components/scini-telemetry.js');
      break;
    case 'numbers':
      module = await import('../components/scini-numbers.js');
      break;
    case 'files':
      module = await import('../components/scini-iframe.js');
      break;
    case 'troubleshooting':
      module = await import('../components/scini-troubleshooting.js');
      break;
    case 'cameragl':
      module = await import('../components/scini-camera.js');
      break;
    case 'replay':
      module = await import('../components/scini-replay.js');
      break;
    case 'visualize':
      module = await import('../components/scini-iframe.js');
      break;
    case 'about':
      module = await import('../components/scini-about.js');
      break;
    default:
      // Nothing matches, set page to '404'.
      module = await import('../components/scini-404.js');
      page = '404';
  }

  if (page === '404') {
    import('../components/scini-404.js');
  }

  dispatch(updatePage(page));
}

export const refreshPage = () => (dispatch, getState) => {
  const state = getState();
  // load page using the current state
  dispatch(loadPage(state.app.page));
}

const updatePage = (page) => {
  return {
    type: UPDATE_PAGE,
    page
  };
}

let snackbarTimer;

export const showSnackbar = () => (dispatch) => {
  dispatch({
    type: OPEN_SNACKBAR
  });
  clearTimeout(snackbarTimer);
  snackbarTimer = setTimeout(() =>
    dispatch({ type: CLOSE_SNACKBAR }), 3000);
};

export const updateOffline = (offline) => (dispatch, getState) => {
  const prev = getState().app.offline;
  dispatch({
    type: UPDATE_OFFLINE,
    offline
  });
  if (prev !== undefined) {
    dispatch(showSnackbar());
  }
  //  automatically refresh when you come back online (offline was true and now is false)
  if (prev === true && offline === false) {
    dispatch(refreshPage());
  }
};

export const updateLayout = (wide) => (dispatch, getState) => {
  dispatch({
    type: UPDATE_WIDE_LAYOUT,
    wide
  });
  if (getState().app.drawerOpened) {
    dispatch(updateDrawerState(false));
  }
}

export const updateDrawerState = (opened) => (dispatch, getState) => {
  if (getState().app.drawerOpened !== opened) {
    dispatch({
      type: UPDATE_DRAWER_STATE,
      opened
    });
  }
}

export const updateLocationURL = (url) => (dispatch) => {
  window.history.pushState({}, '', url);
  dispatch(navigate(window.location));
}

export const updateCameraMap = (location, key, obj) => (dispatch, getState) => {
  const state = getState();

  if (!state.app.hasOwnProperty(key)) {
    state.app[key] = {};
  }
  state.app[key][location] = obj;
  if (key === 'cameraConfig') {
    dispatch(updateCameraState(state.app[key]));
  }
  else if (key === 'streamer') {
    dispatch(updateStreamerState(state.app[key]));
  }
}

const updateCameraState = (cameraConfig) => {
  return {
    type: UPDATE_CAMERA_CONFIG,
    cameraConfig
  }
}

const updateStreamerState = (streamer) => {
  return {
    type: UPDATE_STREAMER,
    streamer
  }
}

export const updateTelemetry = (telemetry) => {
  return {
    type: UPDATE_TELEMETRY,
    telemetry
  }
}

