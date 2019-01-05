/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';

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

  .circle {
    display: block;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    text-align: center;
    border-radius: 50%;
    background: var(--app-primary-color);
    color: var(--app-light-text-color);
    font-size: 30px;
    line-height: 64px;
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

  @import "rainbow.css";
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

  .active {
    background-color: #4CAF50;
  }

  .grid {
    position: relative;
  }
/*
  .item {
    display: block;
    position: absolute;
    width: 30%;
    height: 150px;
    margin: 5px;
    z-index: 1;
    background: #000;
    color: #fff;
  }*/

  .item.muuri-item-dragging {
    z-index: 3;
    background: blue;
  }

  .item.muuri-item-releasing {
    z-index: 2;
    background: blueViolet;
  }

  .item.muuri-item-hidden {
    z-index: 0;
  }

  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    border-radius: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: opacity .15s ease-in-out;
    transition: opacity .15s ease-in-out;
  }

  .slider:hover {
    opacity: 1;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: black;
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border: 0;
    border-radius: 50%;
    background: black;
    cursor: pointer;
  }

  .sliderVal {
    font-size: 14px;
    font-weight: bold;
    color: white;
    background: black;
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

  .tel-item {
    display: block;
    position: absolute;
    width: 100%;
    height: 160px;
    margin: 5px;
    z-index: 1;
    background: #000;
    color: #fff;
  }
  .tel-item.muuri-item-dragging {
    z-index: 3;
    background: blue;
  }
  .tel-item.muuri-item-releasing {
    z-index: 2;
    background: blueViolet;
  }
  .tel-item.muuri-item-hidden {
    z-index: 0;
  }
  .tel-item-content {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .ctrl-item {
    display: block;
    position: absolute;
    width: 18%;
    height: 90px;
    margin: 5px;
    z-index: 1;
    background: linear-gradient(rgb(95, 219, 219), rgb(129, 202, 185));
    color: black;
  }

  .ctrl-item.muuri-item-dragging {
    z-index: 3;
    background: rgb(255, 0, 221);
  }

  .ctrl-item.muuri-item-releasing {
    z-index: 2;
    background: blueViolet;
  }

  .ctrl-item.muuri-item-hidden {
    z-index: 0;
  }

  .ctrl-item-content {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .ctrl-btn {
    background: linear-gradient(rgb(117, 112, 112), rgb(224, 209, 209));
    color: #000000;
    text-shadow: 0 1px 0 white;
  }

  .ctrl-btn-sm {
    border: none;
    color: white;
    margin: 0px;
    padding: 0px 0px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    width: 80%;
    height: 60%;
  }

  .ctrl-btn-large {
    border: none;
    color: white;
    margin-bottom: 2px;
    padding: 5px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    width: 60%;
    height: 60%;
  }

  .ctrl-a {
    padding: 0.35em 0.35em;
    text-decoration: none;
    width: 30%;
  }

  .ctrl-a:hover {
    background-color: #555;
  }

  .ctrl-a:active {
    background-color: black;
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

  /* https://love2dev.com/blog/css-background-stripes/ */
  .barbershop-pole {
    margin: 0 auto;
    background-color: #fff;
    background-repeat: repeat-y;
    background-size: 100% 88px;
    background-position: 0% 0%;
    background-image: repeating-linear-gradient(-25deg, #fff, #fff 20px, #df5646 20px, #df5646 40px, #fff 40px, #fff 60px, #1c78a4 60px, #1c78a4 80px);
  }

  .barbershop-pole:hover {
    margin: 0 auto;
    background-color: rgb(70, 69, 69);
    background-repeat: repeat-y;
    background-size: 100% 88px;
    background-position: 0% 0%;
    background-image: repeating-linear-gradient(-25deg, #fff, #fff 20px, #df5646 20px, #df5646 40px, #fff 40px, #fff 60px, #1c78a4 60px, #1c78a4 80px);
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

</style>
`;
