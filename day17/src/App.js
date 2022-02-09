import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect,
  Prompt,
} from 'react-router-dom'
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import HomePage from './components/Home';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path={'/'} exact component={HomePage} />
            <Route path={'/about'} component={About} />
            <Route path={'/projects'} component={Projects} />
            <Route path={'/contact'} component={Contact} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
