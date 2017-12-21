import axios from 'axios';
import { GET_WEATHER } from './actionTypes';


export const getWeather = (cityId, apiKey) => {

  const request = axios({
    method: "get",
    url: `http://api.openweathermap.org/data/2.5/forecast/daily?id=${cityId}&cnt=${16}&APPID=${apiKey}`,
    responseType: "json",
  });

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: GET_WEATHER, payload: data});
    });
  };

};
