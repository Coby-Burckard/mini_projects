import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { flipSnakeStarted } from '../../actions/snakeActions';

const StartPauseButton = () => {
  const { started } = useSelector(state => state.snake);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(flipSnakeStarted());
  };

  return (
    <button className="button" onClick={handleClick}>
      {started ? 'Pause' : 'Play'}
    </button>
  );
};

export default StartPauseButton;
