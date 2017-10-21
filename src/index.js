import React from 'react';
import ReactDOM from 'react-dom';

import init from './init';
import Game from './Game';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const initialGameState = init();

ReactDOM.render(<Game state={initialGameState}/>, document.getElementById('root'));

registerServiceWorker();
