import axios from 'axios';
import { GET_LOCATION_ID } from './actionTypes';

export const getLocationId = (city, state) => {
  const request = axios ({
    method: "get",
    url: `http://localhost:3090/getlocationid`,
    responseType: "json",
    data: {
      city: city,
      state: state
    }
  });

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: GET_LOCATION_ID, payload: data});
      //localStorage.setItem("locationId", data);
    }).catch((error) => {
      console.log(error);
    });
  };
};
