import * as Pages from "pages";
import constants from "./constants"

const routes = [
  {
    path: constants.routes.HOME,
    exact: true,
    component: Pages.Home
  },
  {
    path: constants.routes.PROJECTS_INDEX,
    exact: true,
    component: Pages.ProjectsIndex
  },
  {
    path: constants.routes.PROJECTS_SINGLE,
    exact: true,
    component: Pages.ProjectsSingle
  },
  {
    path: constants.routes.LABS,
    exact: true,
    component: Pages.Labs
  },
  {
    path: constants.routes.WORK_HISTORY,
    exact: true,
    component: Pages.WorkHistory
  },
  {
    path: constants.routes.CV,
    exact: true,
    component: Pages.Cv
  }
];

export default routes;
