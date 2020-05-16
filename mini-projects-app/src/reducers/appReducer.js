import { combineReducers } from '@reduxjs/toolkit';
import NASAReducer from './NASAReducer';
import snakeReducer from './snakeReducer';

const appReducer = combineReducers({
  NASA: NASAReducer,
  snake: snakeReducer,
});

export default appReducer;
