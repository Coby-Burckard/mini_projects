import React from 'react';
import { PropagateLoader } from 'react-spinners';

const WikiLoader = () => (
  <div className="wiki__entry wiki__entry--loader">
    <PropagateLoader size={25} color="black" loading={true} />
  </div>
);

export default WikiLoader;
