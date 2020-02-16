import { hot } from 'react-hot-loader/root'

import * as Pages from "./pages"

export default process.env.NODE_ENV === "development" ? hot(Pages.Home) : Pages.Home
