import React from 'react';
import { useSelector } from 'react-redux';
import WikiLoader from './WikiLoader';

const WikiDisplay = () => {
  const { entries, searching } = useSelector(state => state.wiki);

  return (
    <div className="wiki__entry-list">
      {searching && <WikiLoader />}
      {entries.map(entry => {
        return (
          <div className="wiki__entry">
            <h2 className="wiki__entry-title">{entry[0]}</h2>
            <p className="wiki__entry-text">{entry[1]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WikiDisplay;
