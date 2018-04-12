import { combineReducers } from 'redux';
import GetWeatherReducer from './getWeatherReducer';
import NewSignUpReducer from './newSignUpReducer';
import AuthenticateUserReducer from './authenticateUserReducer';
import NewLogInReducer from './newLoginReducer';

const rootReducer = combineReducers({
  weatherData: GetWeatherReducer,
  signUpResponse: NewSignUpReducer,
  isUserAuthenticated: AuthenticateUserReducer,
  logInResponse: NewLogInReducer
});

export default rootReducer;
