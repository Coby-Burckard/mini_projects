import React from 'react';
import SpeedSelector from './SpeedSelector';
import StartPauseButton from './StartPauseButton';
import SpeedGauge from './SpeedGauge';

const SnakeNavigation = ({ speed }) => {
  return (
    <div className="snake__navigation">
      <div className="snake__navigation-subsection">
        <SpeedSelector />
      </div>
      <div className="snake__navigation-subsection">
        <StartPauseButton />
      </div>
      <div className="snake__navigation-subsection">
        <SpeedGauge speed={speed} />
      </div>
    </div>
  );
};

export default SnakeNavigation;
