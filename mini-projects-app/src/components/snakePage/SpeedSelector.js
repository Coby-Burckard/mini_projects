import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSpeedFunction, setSnakeStarted } from '../../actions/snakeActions';

const SpeedFuncitonSelect = () => {
  const dispatch = useDispatch();
  const speedOptions = ['LINEAR', 'EXPONENTIAL', 'SONIC', 'RANDOM'];

  const { speedFunction } = useSelector(state => state.snake);

  const handleOptionClick = e => {
    dispatch(setSnakeStarted(false));
    dispatch(setSpeedFunction(e.target.value));
  };

  return (
    <select
      value={speedFunction}
      onChange={handleOptionClick}
      className="snake__speed-select"
    >
      {speedOptions.map(speed => (
        <option className="snake__speed-option" value={speed} key={speed}>
          {speed.charAt(0) + speed.slice(1).toLowerCase()}
        </option>
      ))}
    </select>
  );
};

export default SpeedFuncitonSelect;
