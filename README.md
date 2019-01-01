[![Built with pwa–starter–kit](https://img.shields.io/badge/built_with-pwa–starter–kit_-blue.svg)](https://github.com/Polymer/pwa-starter-kit "Built with pwa–starter–kit")

The app is built using [PWA Starter Kit](https://github.com/Polymer/pwa-starter-kit). Using the starter-template as the starting point and the [wiki](https://github.com/Polymer/pwa-starter-kit/wiki) for configuring and personalizing.

Adapted from the Google "Books PWA" example.

![books screenshot](https://user-images.githubusercontent.com/116360/39160803-4d7a2696-4722-11e8-9ca2-d9b4dd1ac8f5.png)

- Uses the [SpeechRecognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) to search by voice.
- Shimmer placeholder while content is loading.  
    ![shimmer](https://user-images.githubusercontent.com/116360/38531318-1ec79c38-3c24-11e8-8e8f-d2efdf190afa.gif)
- Update the browser URL programmatically without causing page reload. In the app, we want to append query param to the URL when the search input’s value is committed.

## Setup
```bash
$ npm i
$ npm start # or similar that serve index.html for all routes
```

## Build and deploy
```bash
$ npm run build:prpl-server
```
