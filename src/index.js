import App from 'palha';
import { createReactRenderer } from './palhaReactRenderer';

import registerServiceWorker from './registerServiceWorker';

import { initialModel, update, view } from './stranded';

const stranded = new App({
  initialModel: initialModel,
  update: update,
  view: view,
  renderer: createReactRenderer(document.getElementById('root')),
});

stranded.start();

registerServiceWorker();
