import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeather } from '../actions/getWeather';

class MainView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getWeather(524901, "e0b8c173997d4b31764f5dc913c8b268");
  }

  render() {
    return (
      <div>Weather Stuff!</div>
    );
  }

}

MainView.propTypes = {
  weatherData: PropTypes.array.isRequired,
  getWeather: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherData
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getWeather: getWeather
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
