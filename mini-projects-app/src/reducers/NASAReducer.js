import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  images: [],
};

const NASAreducer = createReducer(initialState, {
  ADD_IMAGE: (state, action) => {
    state.images.push(action.imageURL);
  },
});

export default NASAreducer;
