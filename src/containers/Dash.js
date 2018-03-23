import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeather } from '../actions/getWeather';
import icons from '../const/weatherIconsObject';
import { dailyUrl } from '../const/weatherUrls';
import TableRow from '../components/TableRow';

class Dash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "Tim",
      userLocation: "Tallahassee"
    };

  }

  componentDidMount() {
    let location = this.state.userLocation;
    return this.props.getWeather(`${dailyUrl}${this.state.userLocation}&mode=json&cnt=15`);
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    return (
      <div className="dash-container">
        <header>
          <h1 className="hello-user">Hello {this.state.userName}!</h1>
          <hr />
        </header>
        <main>
          <table id="r-table" className="table table-striped">
            <thead>
              <tr>
                <th>DAY</th>
                <th>CONDITIONS</th>
                <th>HIGH / LOW</th>
                <th>WIND</th>
                <th>HUMIDITY</th>
              </tr>
            </thead>
            <tbody>
              <TableRow
                weatherData={this.props.weatherData[0]}
                icons={icons}
              />
            </tbody>
          </table>
        </main>
      </div>
    );
  }

}

Dash.propTypes = {
  weatherData: PropTypes.array.isRequired,
  getWeather: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getWeather
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
