import React from 'react';
import { PropagateLoader } from 'react-spinners';

const WikiLoader = () => (
  <div className="wiki__entry wiki__entry--loader">
    <PropagateLoader size={25} color="#6699ff" loading={true} />
  </div>
);

export default WikiLoader;
