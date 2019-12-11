import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Page from './pages/Page'
import Page2 from './pages/Page2'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li className="home">
              <Link to="/">$5 and Dine$</Link>
            </li>
            <li className="nav">
              <Link to="/1">Search</Link>
            </li>
            <li className="nav">
              <Link to="/1">Daily Specials</Link>
            </li>
            <li className="nav">
              <Link to="/2">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/1" component={Page}></Route>
        <Route exact path="/2" component={Page2}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
