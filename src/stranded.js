import React from 'react'

import {messages} from './messages';
import {actions} from './actions';

import Game from './Game';
import {runAction} from './actions';

export const initialModel = {
  actions: [
    actions.OPEN_CAPSULE_DOOR,
  ],
  messages: [
    messages.STRANDED,
  ],
};

export const view = (model, dispatch) => (
  <Game model={model} dispatch={dispatch} />
);

export const update = (model, action) => (
  runAction(model, action)
);
