import React from 'react';
import ReactDOM from 'react-dom';

import init from './init';
import {actionFunc} from './actions';
import Game from './Game';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const initialModel = init();

const createStore = (initialModel) => {
  let model = initialModel;

  const getModel = () => model;

  const runAction = (action) => {
    model = actionFunc(action)(model)
  };

  return { getModel, runAction };
};

ReactDOM.render(
  <Game store={createStore(initialModel)} />,
  document.getElementById('root')
);

registerServiceWorker();
