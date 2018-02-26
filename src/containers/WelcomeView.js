import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeather } from '../actions/getWeather';
import { currentWeatherUrl } from '../const/weatherUrls';
import welcomeCities from '../const/welcomeCities';
import icons from '../const/weatherIconsObject';

class WelcomeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCity: "",
      currentTime: "",
      currentConditions: "",
      currentIcon: ""
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
      currentTemp: this.convertToFahr(this.props.weatherData[latest].main.temp),
      currentConditions: this.props.weatherData[latest].weather[0].main
    }, this.pickIcon);

  }

  convertToFahr(tempKel) {
    return Math.floor(tempKel * (9 / 5) - 459.67);
  }

  pickIcon() {
    let conditions = this.state.currentConditions;
    let currentIcon;

    switch (conditions) {
      case "Clear":
        currentIcon = icons.sunny;
        break;
      case "Clouds":
        currentIcon = icons.cloudy;
        break;
      case "Rain":
        currentIcon = icons.rain;
        break;
      case "Mist":
        currentIcon = icons.rain;
        break;
      case "Snow":
        currentIcon = icons.snow;
        break;
      default:
        currentIcon = icons.sunny;

    }

    this.setState({
      currentIcon: currentIcon
    });

  }

  render() {
    return (
      <div className="welcome-div">
        <header>
          <h1 className="welcome-city">{this.state.currentCity}</h1>
        </header>
        <hr className="welcome-divider"/>
        <main>
          <div className="welcome-card col-md-3">
            <p className="welcome-conditions">{this.state.currentConditions}</p>
            <div className="welcomeImage-container">
              <img src={this.state.currentIcon} className="welcome-image"/>
            </div>
            <div className="welcome-temp">
              <p>{this.state.currentTemp}&deg;</p>
            </div>
          </div>
        </main>
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
