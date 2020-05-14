import React from 'react';

const Food = ({ foodDot }) => {
  return (
    <div
      className="snake__dot--food"
      key="food"
      style={{ left: `${2 * foodDot[0]}%`, top: `${2 * foodDot[1]}%` }}
    ></div>
  );
};

export default Food;
