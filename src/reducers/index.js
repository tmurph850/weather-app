import { combineReducers } from 'redux';
import GetWeatherReducer from './getWeatherReducer';
import NewSignUpReducer from './newSignUpReducer';
import AuthenticateUserReducer from './authenticateUserReducer';
import GetLocationIdReducer from './getLocationIdReducer';

const rootReducer = combineReducers({
  weatherData: GetWeatherReducer,
  signUpResponse: NewSignUpReducer,
  isUserAuthenticated: AuthenticateUserReducer,
  locationId: GetLocationIdReducer
});

export default rootReducer;
