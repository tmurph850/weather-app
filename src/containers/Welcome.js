import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { getLocationId } from '../actions/getLocationId';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ""
    };

    this.handleLocationInput = this.handleLocationInput.bind(this);
    this.fireRequest = this.fireRequest.bind(this);
  }

  handleLocationInput(e) {
    this.setState({
      location: e.target.value
    });
  }

  fireRequest() {
    this.props.getLocationId(city, state);
  }

  render() {
    return (
      <div className="signup-view">

        <div className="col-md-4 input-block">

          <div className="header-div">
            <h1 className="small-header">Please select a home location!</h1>
            <hr />
          </div>

          <div className="form-group">
            <div>
              <input
                className="form-control inputdefault"
                placeholder="Tallahassee, FL"
                type="text"
                id="email-input"
                onChange={this.handleLocationInput}
                value={this.state.location}
              />
            </div>
          </div>

            <div className="col-md-4 text-center button-container">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.fireRequest}>
                Next
              </button>
            </div>

        </div>

      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    locationId: state.locationId
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getLocationId: getLocationId
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
