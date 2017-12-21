import { combineReducers } from 'redux';
import GetWeatherReducer from './getWeatherReducer';

const rootReducer = combineReducers({
  weatherData: GetWeatherReducer
});

export default rootReducer;
