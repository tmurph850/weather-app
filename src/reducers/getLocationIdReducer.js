import { GET_LOCATION_ID } from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case GET_LOCATION_ID:
      return [ ...state, Object.assign({}, action.payload) ];
    default:
      return state;
  }
};
