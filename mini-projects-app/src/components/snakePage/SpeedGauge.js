import React from 'react';
const SpeedGauge = ({ speed }) => {
  const percent = (350 - speed) / 300;
  console.log(percent);
  return (
    <>
      <div className="snake__speed-display">
        {(10 / (speed / 1000)).toFixed(2)} px/s
      </div>
    </>
  );
};

export default SpeedGauge;
