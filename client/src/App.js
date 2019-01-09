import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </Switch>
    );
  }
}