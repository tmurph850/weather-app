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
          <div className="header-div">
            <h1>Signup</h1>
          </div>
        </header>

        <div className="col-md-3 inputs-container">

          <div className="form-group">
            <div>
              <input
                className="form-control inputdefault"
                placeholder="Email address"
                type="text"
                id="email-input"
              />
            </div>
          </div>

          <div className="form-group">
            <div>
              <input
                className="form-control inputdefault"
                placeholder="Password"
                type="text"
                id="password-input"
              />
            </div>
          </div>

        </div>

      </div>
    );
  }
}

Login.propTypes = {

};

/*const mapStateToProps = (state) => {
  return {

  };
};*/

/*const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch);
};*/

export default connect(null, null)(Login);
