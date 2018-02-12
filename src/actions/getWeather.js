import axios from 'axios';
import { GET_WEATHER } from './actionTypes';
import { apiKey } from '../const/keys';


export const getWeather = (url) => {

  const request = axios({
    method: "get",
    url: `${url}&APPID=${apiKey}`,
    responseType: "json",
  });

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: GET_WEATHER, payload: data});
    });
  };

};
