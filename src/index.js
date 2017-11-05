import React from 'react'
import App from 'palha';
import { createReactRenderer } from 'utils/palhaReactRenderer';
import registerServiceWorker from 'utils/registerServiceWorker';

import Game from 'components/Game';
import {loadModel} from 'storage';
import {update} from 'update';

import 'sanitize.css';
import 'index.css';

export const initialModel = {
  stage: "SPLASH",
};

export const view = (model, dispatch) => (
  <Game model={model} dispatch={dispatch} />
);

const stranded = new App({
  initialModel: loadModel() || initialModel,
  update: update,
  view: view,
  renderer: createReactRenderer(document.getElementById('root')),
});

stranded.start();

registerServiceWorker();
