import * as React from 'react';
import {hot} from 'react-hot-loader/root';

import * as Pages from './pages';

import "animate.css/animate.min.css";

const App: React.FC = () => {
  return <Pages.Home />;
};

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
