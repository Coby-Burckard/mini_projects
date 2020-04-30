import { combineReducers } from "@reduxjs/toolkit";
import NASAReducer from "./NASAReducer";

const appReducer = combineReducers({
  NASA: NASAReducer,
});

export default appReducer;
