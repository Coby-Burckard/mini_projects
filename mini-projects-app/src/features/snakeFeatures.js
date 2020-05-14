const randomInt = xyMax => {
  // takes in an array of max x and y coord and returns a random array where xRand <= xMax and yRand <= yMax
  return xyMax.map(max => Math.floor(Math.random() * (max + 1)));
};

export { randomInt };
