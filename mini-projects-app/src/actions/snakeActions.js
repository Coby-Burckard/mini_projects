const flipSnakeStarted = () => ({
  type: 'FLIP_SNAKE_STARTED',
});

const setSnakeStarted = started => ({
  type: 'SET_SNAKE_STARTED',
  started,
});

const setSpeedFunction = speedFunction => ({
  type: 'SET_SPEED_FUNCTION',
  speedFunction,
});

export { flipSnakeStarted, setSpeedFunction, setSnakeStarted };
