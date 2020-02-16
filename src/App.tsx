import * as React from 'react'
import { hot } from 'react-hot-loader/root'

import * as Pages from "./pages"
import { Base } from './components'

const App: React.FC = () => {
  return (
    <Base>
      <Pages.Home />
    </Base>
  )
}

export default process.env.NODE_ENV === "development" ? hot(App) : App
