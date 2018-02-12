import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import WelcomeView from '../containers/WelcomeView';
import SignUp from '../containers/SignUp';

class Container extends Component {

  render() {

    return (
      <div id="container-fluid">
        <Route exact path="/" component={WelcomeView}/>
        <Route exact path="/signup" component={SignUp}/>
      </div>
    );

  }

}

export default Container;
