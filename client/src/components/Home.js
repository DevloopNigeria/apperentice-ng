import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default class Home extends Component {
  render() {
    return (
      <div className='App'>
        Apprentice NG<br />

        <Link to='/about'>
          <Button>Visit About Page</Button>
        </Link>
      </div>
    );
  }
}