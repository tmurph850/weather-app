import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { newSignUp } from '../actions/newSignup';
import { newLogIn } from '../actions/newLogIn';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.requestSignUp = this.requestSignUp.bind(this);
    this.requestLogIn = this.requestLogIn.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { match, location, history } = this.props;
    if ( this.props.signUpResponse.length !== nextProps.signUpResponse.length ) {
      if ( nextProps.signUpResponse[0] && nextProps.signUpResponse[0].status === "success" ) {
        const newLocation = {
          pathname: '/dashboard'
        };
        history.push(newLocation);
      }
    }
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

  requestSignUp() {
    let email = this.state.email;
    let password = this.state.password;

    this.props.newSignUp(email, password);
  }

  requestLogIn() {
    let email = this.state.email;
    let password = this.state.password;

    this.props.newLogIn(email, password);
  }

  render() {
    if ( window.location.href.includes("login") ) {
      return (
        <div className="signup-view">

          <div className="col-md-4 input-block">

            <div className="header-div">
              <h1>Log In</h1>
            </div>

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

              <div className="col-md-4 text-center button-container">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.requestLogIn}>
                  Next
                </button>
              </div>

          </div>

        </div>
      );
    } else {
      return (
        <div className="signup-view">

          <div className="col-md-4 input-block">

            <div className="header-div">
              <h1>Sign up</h1>
            </div>

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

              <div className="col-md-4 text-center button-container">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.requestSignUp}>
                  Next
                </button>
              </div>

          </div>

        </div>
      );
    }
  }
}

SignUp.propTypes = {
  newSignUp: PropTypes.func.isRequired,
  newLogIn: PropTypes.func.isRequired,
  signUpResponse: PropTypes.array,
  logInResponse: PropTypes.array,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    signUpResponse: state.signUpResponse,
    logInResponse: state.logInResponse
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    newSignUp: newSignUp,
    newLogIn
  }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
