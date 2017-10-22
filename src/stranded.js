import React from 'react'

import {messages} from './messages';
import {actions} from './actions';

import Game from './Game';
import {runAction} from './actions';

export const initialModel = {
  hatch: {
    openButtonNeverPressed: true,
    stuck: true,
    requiredKicks: 3,
  },
  actions: [
    actions.OPEN_CAPSULE_HATCH,
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
