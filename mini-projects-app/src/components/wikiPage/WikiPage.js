import React from 'react';
import WikiInput from './WikiInput';
import WikiDisplay from './WikiDisplay';

const WikiPage = () => {
  return (
    <div className="wiki middle">
      <WikiInput />
      <WikiDisplay />
    </div>
  );
};

export default WikiPage;
