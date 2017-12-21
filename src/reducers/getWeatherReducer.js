import { GET_WEATHER } from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case GET_WEATHER:
      return [ ...state, Object.assign({}, action.payload) ];

    default:
      return state;
  }
};
