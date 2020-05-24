import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useInterval from 'use-interval';
import Snake from './Snake';
import Food from './Food';
import {
  randomInt,
  isGameOver,
  moveSnake,
  parseDirection,
  calculateSpeed,
} from '../../features/snakeFeatures';
import { flipSnakeStarted } from '../../actions/snakeActions';
import SnakeNavigation from './SnakeNavigation';

const SnakeGame = () => {
  //50x50 grid game of snake

  const dispatch = useDispatch();

  //initial state values
  const initialSnake = [
    [0, 0],
    [1, 0],
    [2, 0],
  ];
  const initialSpeed = 350;
  const initialDirection = 'right';
  const randomFood = randomInt([49, 49], initialSnake);

  //initializing local state
  const { speedFunction, started } = useSelector(state => state.snake);
  const [snakeDots, setSnakeDots] = useState(initialSnake);
  const [direction, setDirection] = useState(initialDirection);
  const [speed, setSpeed] = useState(initialSpeed);
  const [foodDot, setFood] = useState(randomFood);
  const [initializationFlag, setInitializationFlag] = useState(false);

  //handling food
  const randomizeFood = () => {
    setFood(randomInt([49, 49], snakeDots));
  };

  //setting the interval for movement
  useInterval(
    () => setSnakeDots(moveSnake(snakeDots, direction)),
    started ? speed : null
  );

  //setting the event listener for key presses
  useEffect(() => {
    document.onkeydown = e => setDirection(parseDirection(e) || direction);
  }, [direction]);

  //checking if the snake has run into itself, a wall, or food and updating the size/speed
  useEffect(() => {
    const head = snakeDots[snakeDots.length - 1];
    const headless = [...snakeDots];
    headless.pop();

    if (isGameOver(head, headless)) {
      handleGameEnd();
    }

    if (head[0] === foodDot[0] && head[1] === foodDot[1]) {
      const newSnake = [...snakeDots];
      newSnake.unshift([]);
      setSnakeDots(newSnake);
      randomizeFood();

      const newSpeed = calculateSpeed(speedFunction, speed, snakeDots);
      setSpeed(newSpeed);
    }
  }, [snakeDots, foodDot, handleGameEnd]);

  //if the speed is updated outside of the speed function initialization, a new speed is calculated
  useEffect(() => {
    if (initializationFlag) {
      setSpeed(calculateSpeed(speedFunction, speed, snakeDots));
    } else {
      setInitializationFlag(true);
    }
  }, [speedFunction]);

  //reseting game if game over
  function handleGameEnd() {
    setSnakeDots(initialSnake);
    setFood(randomFood);
    setDirection(initialDirection);
    setSpeed(speedFunction === 'SONIC' ? 50 : initialSpeed);
    dispatch(flipSnakeStarted());
  }

  return (
    <div className="snake">
      <div className="snake__container">
        <div className="snake__sub-container">
          <Snake snakeDots={snakeDots} />
          <Food foodDot={foodDot} />
        </div>
        <SnakeNavigation speed={speed} />
      </div>
    </div>
  );
};

export default SnakeGame;
