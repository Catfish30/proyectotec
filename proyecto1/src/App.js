import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
// import CursoView from './views/CursoView'
import NavTop from './components/NavTop'
import FooterPage from './components/FooterPage'

import Routes from './Routes'

export default function App() {
  
  return (
    <Router>
      <NavTop />
      <Switch>
        <Routes />
      </Switch>
      <FooterPage />
    </Router>
    
  )
}
