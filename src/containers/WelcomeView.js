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
      currentIcon: "",
      currentImage: ""
    };

    this.selectRandomCity = this.selectRandomCity.bind(this);
  }

  componentDidMount() {
    this.selectRandomCity();
  }

  componentDidUpdate(prevProps, prevState) {
    if ( prevProps.weatherData.length !== this.props.weatherData.length ) {
      this.runSelectCity();
      this.updateCurrentCity();
    }

    if ( this.props.weatherData.length > 1 ) {
      let welcomeDiv = document.getElementsByClassName("welcome-div");
      if ( welcomeDiv[0].style.trasitionDuration !== "3s" ) {
        this.setTransition();
      }
    }

  }


  runSelectCity() {
    window.setTimeout(this.selectRandomCity, 10000);
  }

  selectRandomCity() {
    let numberOfCities = welcomeCities.length;
    let randomCity = Math.floor( Math.random() * (numberOfCities - 0) + 0 );

    return this.props.getWeather(currentWeatherUrl + welcomeCities[randomCity].city);
  }

  updateCurrentCity() {
    let len = this.props.weatherData.length;
    let latest = len - 1;
    let currentCity = this.props.weatherData[latest].name;
    let currentImage;

    welcomeCities.some((city) => {
      if ( currentCity === city.city ) {
        currentImage = city.image;
      }
    });

    this.setState({
      currentCity: currentCity,
      currentTemp: this.convertToFahr(this.props.weatherData[latest].main.temp),
      currentConditions: this.props.weatherData[latest].weather[0].main,
      currentImage: currentImage
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

  setTransition() {
    let welcomeDiv = document.getElementsByClassName("welcome-div");
    welcomeDiv[0].style.transitionDuration = "2s";
    welcomeDiv[0].style.transitionDelay = "1s";
  }

  render() {
    return (
      <div className="welcome-div" style ={{ backgroundImage: `url(${this.state.currentImage})` }}>
        <header>
          <h1 className="welcome-city">{this.state.currentCity}</h1>
        </header>
        <main>
          <div className="welcome-card col-md-6">
            <div className="welcomeImage-container">
              <p className="welcome-temp">{this.state.currentTemp}&deg;</p>
              <img src={this.state.currentIcon} className="welcome-image"/>
            </div>
            <p className="welcome-conditions">{this.state.currentConditions}</p>
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
