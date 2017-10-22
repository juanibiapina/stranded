import React from 'react'

import {messages, createMessage} from './messages';
import {actionIds, createAction} from './actions';
import {blinkOpenHatchAction} from './tickers';

import Game from './Game';
import {runAction} from './actions';

export const initialModel = {
  hatch: {
    openButtonNeverPressed: true,
    stuck: true,
    requiredKicks: 3,
  },
  tickers: [
    blinkOpenHatchAction,
  ],
  actions: [
    createAction(actionIds.OPEN_CAPSULE_HATCH, true),
  ],
  messages: [
    createMessage(messages.STRANDED),
  ],
};

export const view = (model, dispatch) => (
  <Game model={model} dispatch={dispatch} />
);

export const update = (model, actionId) => (
  runAction(model, actionId)
);
