import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'unstated'
import { normalize } from 'polished'
import { injectGlobal } from 'styled-components'
import Routes from './Routes'

injectGlobal`
  ${normalize()}
`

render(
  <Provider>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('app')
)
