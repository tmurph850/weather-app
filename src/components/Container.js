import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainView from '../containers/MainView';
import Login from '../containers/Login';

class Container extends Component {

  render() {

    return (
      <div id="container-fluid">
        <Route exact path="/" component={MainView}/>
        <Route exact path="/signup" component={Login}/>
      </div>
    );

  }

}

export default Container;
