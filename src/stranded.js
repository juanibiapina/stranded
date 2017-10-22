import React from 'react'

import Game from './Game';
import {runAction} from './actions';

export const initialModel = {
  stage: "SPLASH",
};

export const view = (model, dispatch) => (
  <Game model={model} dispatch={dispatch} />
);

export const update = (model, actionId) => (
  runAction(model, actionId)
);
