import React from 'react'
import './App.css'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Login from './containers/Login';
import Tracker from './containers/Tracker'

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/history">
          <Tracker/>
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
