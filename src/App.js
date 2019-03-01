import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Partners from './pages/Partners';
import Skills from './pages/Skills';




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path = '/' component =  { Home }  />
          <Route exact path = '/Login' component =  { Login}  />
          <Route exact path = '/About' component = { About } />
          <Route exact path = '/Partners' component = { Partners } />
          <Route exact path = '/Skills' component = { Skills } />
        </div>
      </Router>

    );
 }
}
export default App;
