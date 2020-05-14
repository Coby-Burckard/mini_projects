import React, { useState, useEffect } from 'react';
import useInterval from 'use-interval';
import Snake from './Snake';
import Food from './Food';
import { randomInt } from '../../features/snakeFeatures';

const SnakeGame = () => {
  //50x50 grid game of snake

  //initializing local state
  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [1, 0],
    [2, 0],
  ]);
  const [foodDot, setFood] = useState(randomInt([49, 49]));
  const [direction, setDirection] = useState('right');
  const [speed, setSpeed] = useState(500);

  //handling direction changes
  const updateDirection = e => {
    switch (e.keyCode) {
      case 38:
        setDirection('up');
        break;
      case 39:
        setDirection('right');
        break;
      case 40:
        setDirection('down');
        break;
      case 37:
        setDirection('left');
        break;
      default:
    }
  };

  //moving the snake body
  const moveSnake = () => {
    setSnakeDots(snakeDots => {
      const head = snakeDots[snakeDots.length - 1];
      let newHead;
      console.log('movings snake ', ...snakeDots, 'direction', direction);

      //creating a new head for the given direction of movement
      switch (direction) {
        case 'up':
          newHead = [head[0], head[1] - 1];
          break;
        case 'right':
          newHead = [head[0] + 1, head[1]];
          break;
        case 'down':
          newHead = [head[0], head[1] + 1];
          break;
        case 'left':
          newHead = [head[0] - 1, head[1]];
          break;
        default:
      }

      //updating snake with new head
      const newSnake = [...snakeDots];
      newSnake.shift();
      newSnake.push(newHead);
      console.log(...newSnake);
      return newSnake;
    });
  };

  //setting up the interval for movement
  useInterval(moveSnake, speed);

  //setting the event listener for key presses
  useEffect(() => {
    document.onkeydown = updateDirection;
  }, []);

  return (
    <div className="snake__container middle">
      <div className="snake__sub-container middle">
        <Snake snakeDots={snakeDots} />
        <Food foodDot={foodDot} />
      </div>
    </div>
  );
};

export default SnakeGame;
