import { combineReducers } from 'redux';

import pizzaSizesReducer from './pizzaSizesReducer.js';
import pizzaToppingsReducer from './pizzaToppingsReducer.js';

export default combineReducers({
  sizes: pizzaSizesReducer,
  toppings: pizzaToppingsReducer
});
