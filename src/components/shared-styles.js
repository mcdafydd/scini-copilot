/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from 'lit-element';

export const SharedStyles = html`
<style>
  :host {
    box-sizing: border-box;
  }

  section {
    padding: 24px;
    background: var(--app-section-odd-color);
  }

  section > * {
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
  }

  section:nth-of-type(even) {
    background: var(--app-section-even-color);
  }

  #data-locatons, #data-pro4 {
    display: inline-table;
  }

  h2 {
    font-size: 24px;
    text-align: center;
    color: var(--app-dark-text-color);
  }

  /* wide layout */
  @media (min-width: 648px) {
    h2 {
      font-size: 36px;
    }
  }

  .scini-button {
    display: inline-block;
    margin-right: 8px;
    padding: 8px 44px;
    border: 2px solid var(--app-dark-text-color);
    box-sizing: border-box;
    background-color: transparent;
    color: var(--app-dark-text-color);
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
  }

  .scini-button:active {
    background-color: var(--app-dark-text-color);
    color: #FFF;
  }

  body {
    background-color: #111111;
    color: #eeeeee;
    font-family: tahoma, arial, sans-serif;
    padding-left: 100px;
  }

  h4 {
    margin-bottom: 1px;
  }

  h5 {
    margin-bottom: 2.5px;
    margin-top: 2.5px;
  }

  iframe {
    overflow: hidden;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  select {
    font-size: 18px;
  }

  button {
    background-color: #4CAF50;
    /* Green */
    border: none;
    color: white;
    margin-bottom: 2px;
    padding: 5px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
  }

  button:active {
    background-color: #ACFF00;
  }

  canvas {
    display: block;
    width: 100%;
    height: 100px;
  }

  .video-canvas {
    width: 100%;
    height: 100%
  }

  .support {
    display: none;
  }

  .notsupported {
    display: block;
    font-weight: bold;
    text-align: center;
    padding: var(--default-padding-half);
    background-color: var(--material-red-500);
    color: white;
  }

  .tg {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .tg td {
    font-family: Arial, sans-serif;
    font-size: 14px;
    padding: 10px 5px;
    border-style: solid;
    border-width: 1px;
    overflow: hidden;
    word-break: normal;
    border-color: black;
  }

  .tg th {
    font-family: Arial, sans-serif;
    font-size: 14px;
    font-weight: normal;
    padding: 10px 5px;
    border-style: solid;
    border-width: 1px;
    overflow: hidden;
    word-break: normal;
    border-color: black;
  }

  .tg .tg-0lax {
    text-align: center;
    vertical-align: top
  }

  .tg tr:hover  {
    background-color: #706161;
  }

  .tg .tg-0lax .tg-container {
    position: relative;
  }

  /* device location styling */
  .side {
    background: linear-gradient(rgb(224, 224, 50),lightgoldenrodyellow);
  }

  .bore {
    background: linear-gradient(rgb(64, 170, 219), rgb(139, 189, 206));
  }

  .forward {
    background: linear-gradient(rgb(240, 63, 63), lightcoral);
  }

  .down {
    background: linear-gradient(rgb(246, 129, 33), rgb(223, 171, 141));
  }

  .up {
    background: linear-gradient(rgb(43, 206, 43), rgb(116, 190, 116));
  }

  .manip {
    background: linear-gradient(rgb(224, 209, 209), rgb(117, 112, 112));
  }

  .lds-ripple {
    position: absolute;
    width: 64px;
    height: 64px;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
    background-size: 100%;
    z-index: 999;
  }
  .lds-ripple div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  }
</style>
`;
