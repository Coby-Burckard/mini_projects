import { combineReducers } from '@reduxjs/toolkit';
import NASAReducer from './NASAReducer';
import snakeReducer from './snakeReducer';
import wikiReducer from './wikiReducer';
import stockReducer from './stockReducer';

const appReducer = combineReducers({
  NASA: NASAReducer,
  snake: snakeReducer,
  wiki: wikiReducer,
  stock: stockReducer,
});

export default appReducer;
