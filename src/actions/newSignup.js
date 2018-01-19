import axios from 'axios';
import { NEW_SIGNUP } from './actionTypes';

export const newSignUp = (email, password) => {
  const request = axios({
    method: "post",
    url: `http://localhost:3090/signup`,
    responseType: "json",
    data: {
      email: email,
      password: password
    }
  });

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: NEW_SIGNUP, payload: data});
    });
  };

};
