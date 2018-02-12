import { combineReducers } from 'redux';
import GetWeatherReducer from './getWeatherReducer';
import NewSignUpReducer from './newSignUpReducer';
import AuthenticateUserReducer from './authenticateUserReducer';

const rootReducer = combineReducers({
  weatherData: GetWeatherReducer,
  signUpResponse: NewSignUpReducer,
  isUserAuthenticated: AuthenticateUserReducer
});

export default rootReducer;
