import { combineReducers } from 'redux';

import countriesDataReducer from './countriesDataReducer.js';
import bucketListReducer from './bucketListReducer.js';

export default combineReducers({
  countriesData: countriesDataReducer,
  bucketList: bucketListReducer
});