import * as React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import App from './App'

console.log(process.env)
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
