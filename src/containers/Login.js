import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  whichHeader() {
    // will decide which header to render
    // going to use output inside header
  }

  render() {
    return (
      <div className="login-view">
        <header>
          <h1>Signup</h1>
        </header>
        <div className="form-group">
          <label htmlFor="email-input">email:</label>
          <div>
            <input
              className="form-control inputdefault"
              type="text"
              id="email-input"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password-input">password:</label>
          <div>
            <input
              className="form-control inputdefault"
              type="text"
              id="password-input"
            />
          </div>
        </div>
      </div>
    );
  }
}

/*const mapStateToProps = (state) => {
  return {

  };
};*/

/*const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch);
};*/

export default Login;
