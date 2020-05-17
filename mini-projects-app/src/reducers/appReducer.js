import { combineReducers } from '@reduxjs/toolkit';
import NASAReducer from './NASAReducer';
import snakeReducer from './snakeReducer';
import wikiReducer from './wikiReducer';

const appReducer = combineReducers({
  NASA: NASAReducer,
  snake: snakeReducer,
  wiki: wikiReducer,
});

export default appReducer;
