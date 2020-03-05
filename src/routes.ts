import * as Pages from './pages'

interface Routes {
  [handle: string]: string;
}

export const ROUTES: Routes = {
  HOME: '/',
  PROJECTS: '/projects',
  LABS: '/labs',
  WORK_HISTORY: '/work-history'
}

const routes = [
  {
    path: ROUTES.HOME,
    exact: true,
    component: Pages.Home
  },
  {
    path: ROUTES.PROJECTS,
    exact: true,
    component: Pages.Projects
  },
  {
    path: ROUTES.LABS,
    exact: true,
    component: Pages.Labs
  },
  {
    path: ROUTES.WORK_HISTORY,
    exact: true,
    component: Pages.WorkHistory
  }
]

export default routes
