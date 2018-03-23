import React from 'react';
import PropTypes from 'prop-types';
import icons from '../const/weatherIconsObject';
import { convertToFahr, genKey, formatDate, metersPerSecToMPH, pickIcon } from '../const/utilities';

const TableRow = (props) => {
  let usedNums = [];
  if ( props.weatherData && Object.keys(props.weatherData).length > 1 ) {
    const renderTableRows = props.weatherData.list.map((day) => {
      return (
          <tr key={genKey(usedNums)}>
              <th scope="row">{formatDate(day.dt)}</th>
              <td className="icon-td">{day.weather[0].main} <img className="table-icon" src={pickIcon(icons, day.weather[0].main)}/></td>
              <td>{convertToFahr(day.temp.min)}&deg;/{convertToFahr(day.temp.max)}&deg;</td>
              <td>{metersPerSecToMPH(day.speed)} mph</td>
              <td>{day.humidity}%</td>
          </tr>
      );
    });
    return renderTableRows;
  }

  return <tr><td>Loading</td></tr>;

};

TableRow.propTypes = {
  weatherData: PropTypes.object
};

export default TableRow;
