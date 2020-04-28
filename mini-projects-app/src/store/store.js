import { configureStore } from "@reduxjs/toolkit";

// combining reducers into a 'root' reducer
const rootReducer = {};

const store = configureStore({ reducer: rootReducer });

export default store;
