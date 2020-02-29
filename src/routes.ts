import * as Pages from './pages'

const routes = [
  {
    path: "/",
    exact: true,
    component: Pages.Home
  },
  {
    path: "/projects",
    exact: true,
    component: Pages.Projects
  }
]

export default routes
