import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as Pages from './pages';

const APP_ROOT = document.querySelector('#root');

ReactDOM.render(<Pages.Home />, APP_ROOT);
