import React from 'react';
import PropTypes from 'prop-types';
import { convertToFahr } from '../const/utilities';

const TableRow = (props) => {
  if ( props.weatherData && Object.keys(props.weatherData).length > 1 ) {
    const renderTableRows = props.weatherData.list.map((day) => {
      return (
          <tr>
              <th scope="row">{day.dt}</th>
              <td>{day.weather[0].main}</td>
              <td>{convertToFahr(day.temp.day)}&deg;</td>
              <td>{day.speed}</td>
              <td>{day.humidity}</td>
          </tr>
      );
    });
    return renderTableRows;
  }

  return <tr><td>Loading</td></tr>;

};

export default TableRow;
