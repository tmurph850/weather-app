import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }

  whichHeader() {
    // will decide which header to render
    // going to use output inside header
  }

  handleEmailInput(e) {
    this.setState({
      email: e.target.value
    });
  }

  handlePasswordInput(e) {
    this.setState({
      password: e.target.value
    });
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
                onChange={this.handleEmailInput}
                value={this.state.email}
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
                onChange={this.handlePasswordInput}
                value={this.state.password}
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
