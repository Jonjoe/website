import * as React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {renderRoutes } from 'react-router-config'

import {hot} from 'react-hot-loader/root';
import "animate.css/animate.min.css";

import routes from './routes'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  )
};

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
