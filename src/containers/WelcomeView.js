import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeather } from '../actions/getWeather';
import { currentWeatherUrl } from '../const/weatherUrls';
import welcomeCities from '../const/welcomeCities';

class WelcomeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCity: "",
      currentTime: ""
    };

    this.selectRandomCity = this.selectRandomCity.bind(this);
  }

  componentDidMount() {
    this.props.getWeather(currentWeatherUrl + "Tallahassee");
  }

  componentDidUpdate(prevProps, prevState) {
    if ( prevProps.weatherData.length !== this.props.weatherData.length ) {
      this.runSelectCity();
      this.updateCurrentCity();
    }
  }

  runSelectCity() {
    window.setTimeout(this.selectRandomCity, 10000);
  }

  selectRandomCity() {
    let numberOfCities = welcomeCities.length;
    let randomCity = Math.floor( Math.random() * (numberOfCities - 0) + 0 );

    return this.props.getWeather(currentWeatherUrl + welcomeCities[randomCity]);
  }

  updateCurrentCity() {
    let len = this.props.weatherData.length;
    let latest = len - 1;

    this.setState({
      currentCity: this.props.weatherData[latest].name,
      currentTemp: this.convertToFahr(this.props.weatherData[latest].main.temp)
    });
  }

  convertToFahr(tempKel) {
    return Math.floor(tempKel * (9 / 5) - 459.67);
  }

  render() {
    return (
      <div className="container">
        <div>{this.state.currentCity}</div>
        <div>{this.state.currentTemp}&deg;</div>
        <div><img src="/resources/img/29.svg"/></div>
      </div>
    );
  }

}

WelcomeView.propTypes = {
  weatherData: PropTypes.array.isRequired,
  getWeather: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherData,
    isUserAuthenticated: state.isUserAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getWeather: getWeather
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeView);
