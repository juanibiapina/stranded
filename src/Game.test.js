import React from 'react';
import ReactDOM from 'react-dom';

import Game from './Game';

const model = {
  actions: [],
  messages: [],
};

const dispatch = jest.fn();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game model={model} dispatch={dispatch} />, div);
});
