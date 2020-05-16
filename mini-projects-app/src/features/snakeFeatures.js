const randomInt = xyMax => {
  // takes in an array of max x and y coord and returns a random array where xRand <= xMax and yRand <= yMax
  return xyMax.map(max => Math.floor(Math.random() * (max + 1)));
};

const isGameOver = (head, headless) => {
  //checking if the snake hit a wall
  if (head[0] < 0 || head[0] > 49 || head[1] < 0 || head[1] > 49) {
    return true;
  }

  //checking if the snake hit itself
  return headless.some(dot => {
    if (dot[0] === head[0] && dot[1] === head[1]) {
      return true;
    }
    return false;
  });
};

//moving the snake body
const moveSnake = (snakeDots, direction) => {
  const head = snakeDots[snakeDots.length - 1];
  let newHead;

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
  return newSnake;
};

//handling direction changes
const parseDirection = e => {
  switch (e.keyCode) {
    case 38:
      return 'up';
    case 39:
      return 'right';
    case 40:
      return 'down';
    case 37:
      return 'left';
    default:
  }
};

const calculateSpeed = (speedFunction, speed, snakeDots) => {
  const snakeGrowth = snakeDots.length - 2;
  const startingSpeed = 350;
  const minSpeed = 50;

  if (speed < minSpeed || speed > startingSpeed) {
    return speed;
  }

  switch (speedFunction) {
    case 'LINEAR':
      return startingSpeed - snakeGrowth * 5;
    case 'RANDOM':
      return Math.floor(Math.random() * startingSpeed) + 50;
    case 'EXPONENTIAL':
      return startingSpeed - 1.25 ** snakeGrowth;
    case 'SONIC':
      return minSpeed;
    default:
      return speed;
  }
};

export { randomInt, isGameOver, moveSnake, parseDirection, calculateSpeed };
