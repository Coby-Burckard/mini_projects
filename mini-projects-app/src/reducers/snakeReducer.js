import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  started: false,
  speedFunction: 'LINEAR',
};

const snakeReducer = createReducer(initialState, {
  SET_SPEED_FUNCTION: (state, { speedFunction }) => {
    state.speedFunction = speedFunction;
  },
  FLIP_SNAKE_STARTED: state => {
    state.started = !state.started;
  },
  SET_SNAKE_STARTED: (state, { started }) => {
    state.started = started;
  },
});

export default snakeReducer;
