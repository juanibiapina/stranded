import React from 'react'
import App from 'palha';
import { createReactRenderer } from 'utils/palhaReactRenderer';
import registerServiceWorker from 'utils/registerServiceWorker';

import Game from 'Game';
import {runAction} from 'actions';

export const initialModel = {
  stage: "SPLASH",
};

export const view = (model, dispatch) => (
  <Game model={model} dispatch={dispatch} />
);

export const update = (model, actionId) => (
  runAction(model, actionId)
);

const stranded = new App({
  initialModel: initialModel,
  update: update,
  view: view,
  renderer: createReactRenderer(document.getElementById('root')),
});

stranded.start();

registerServiceWorker();
