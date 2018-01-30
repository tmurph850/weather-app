import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainView from '../containers/MainView';
import SignUp from '../containers/SignUp';
import Welcome from '../containers/Welcome';

class Container extends Component {

  render() {

    return (
      <div id="container-fluid">
        <Route exact path="/" component={MainView}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/welcome" component={Welcome}/>
      </div>
    );

  }

}

export default Container;
