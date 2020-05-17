import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  entries: [],
  searching: false,
  error: null,
};

const wikiReducer = createReducer(initialState, {
  SET_WIKI_PARAGRAPH: (state, action) => {
    state.entries.unshift(action.entry);
  },
  SET_WIKI_SEARCHING: (state, action) => {
    state.searching = action.searching;
  },
  SET_WIKI_ERROR: (state, action) => {
    state.error = action.err;
  },
});

export default wikiReducer;
