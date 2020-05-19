import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import appReducer from '../reducers/appReducer';
import websocketMiddleware from '../websocket/websocketMiddleware';

const store = configureStore({
  reducer: appReducer,
  middleware: [...getDefaultMiddleware(), websocketMiddleware],
});

export default store;
