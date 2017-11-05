import React from 'react';
import ReactDOM from 'react-dom';

import Game from 'components/Game';

const model = {
  actions: [],
  userMessages: [],
};

const dispatch = jest.fn();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game model={model} dispatch={dispatch} />, div);
});
