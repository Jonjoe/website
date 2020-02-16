import * as React from 'react';
import {hot} from 'react-hot-loader/root';

import * as Pages from './pages';

const App: React.FC = () => {
  return <Pages.Home />;
};

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
