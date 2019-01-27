/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { UPDATE_PAGE, UPDATE_OFFLINE, UPDATE_WIDE_LAYOUT,
         UPDATE_CAMERA_CONFIG, UPDATE_STREAMER, OPEN_SNACKBAR, CLOSE_SNACKBAR,
         UPDATE_DRAWER_STATE, UPDATE_TELEMETRY } from '../actions/app.js';

const app = (state = {drawerOpened: false}, action) => {
  switch (action.type) {
    case UPDATE_PAGE:
      const p = action.page;
      return {
        ...state,
        page: p,
        lastVisitedListPage: state.lastVisitedListPage
      };
    case UPDATE_OFFLINE:
      return {
        ...state,
        offline: action.offline
      };
    case UPDATE_WIDE_LAYOUT:
      return {
        ...state,
        wideLayout: action.wide
      };
    case UPDATE_DRAWER_STATE:
      return {
        ...state,
        drawerOpened: action.opened
      };
    case UPDATE_CAMERA_CONFIG:
      return {
        ...state,
        cameraConfig: action.cameraConfig
      };
    case UPDATE_STREAMER:
      return {
        ...state,
        streamer: action.streamer
      };
    case UPDATE_TELEMETRY:
      return {
        ...state,
        telemetry: action.telemetry
      };
    case OPEN_SNACKBAR:
      return {
        ...state,
        snackbarOpened: true
      };
    case CLOSE_SNACKBAR:
      return {
        ...state,
        snackbarOpened: false
      };
    default:
      return state;
  }
}

export default app;
