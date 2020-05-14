import React from 'react';

const Snake = ({ snakeDots }) => {
  return (
    <>
      {snakeDots.map((dot, index) => (
        <div
          className="snake__dot"
          key={index}
          style={{ left: `${2 * dot[0]}%`, top: `${2 * dot[1]}%` }}
        ></div>
      ))}
    </>
  );
};

export default Snake;
