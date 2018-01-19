import { combineReducers } from 'redux';
import GetWeatherReducer from './getWeatherReducer';
import NewSignUpReducer from './newSignUpReducer';

const rootReducer = combineReducers({
  weatherData: GetWeatherReducer,
  signUpResponse: NewSignUpReducer
});

export default rootReducer;
