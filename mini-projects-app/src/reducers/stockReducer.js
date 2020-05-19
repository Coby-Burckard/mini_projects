import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  stocks: [
    { symbol: null, prices: [null, null] },
    { symbol: null, prices: [null, null] },
  ],
};

const stockReducer = createReducer(initialState, {
  SET_STOCKS: (state, { stocks }) => {
    state.stocks = stocks;
  },
});

export default stockReducer;
