import * as React from "react";
import ReactGA from "react-ga";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { hot } from "react-hot-loader/root";

import { Portals } from "components";

import { routes, apiKeys } from "config";

ReactGA.initialize(apiKeys.GA_CODE);
ReactGA.pageview(window.location.pathname + window.location.search);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {renderRoutes(routes)}
      <Portals />
    </BrowserRouter>
  );
};

export default process.env.NODE_ENV === "development" ? hot(App) : App;
