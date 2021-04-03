import * as React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Landing from '~/ui/Landing'
import Project from '~/ui/Project'

import './App.scss'

const App = () => (
  <Router>
    <div className="d71a">
      <div className="container">
        <nav className="display-1 display-sm">
          <Link to="/">Home</Link>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/project-example">
          <Project heading="Project Example" />
        </Route>
      </Switch>
      <div className="bg-light">
        <footer className="container display-6">
          <div className="no-crawler">ann.niou@gmail.com</div>
        </footer>
      </div>
    </div>
  </Router>
)

export default App
