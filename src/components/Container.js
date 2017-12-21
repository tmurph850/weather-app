import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainView from '../containers/MainView';

class Container extends Component {

  render() {

    return (
      <div id="container-fluid">
        <Route path="/" component={MainView}/>
      </div>
    );

  }

}

export default Container;
