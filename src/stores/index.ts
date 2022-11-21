import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import intlState from './reducers/intl';
import menuState from './reducers/menu';
import thunkMiddleware from 'redux-thunk';

const reducer = combineReducers({
	intlState,
	menuState,
});
const store = configureStore({
	reducer: reducer,
	middleware: getDefaultMiddleware =>
	  getDefaultMiddleware()
	  .prepend(thunkMiddleware)
  })
export default store;
