import React from 'react';
import classnames from 'classnames';
import RingLoader from 'react-spinners/RingLoader';

const Loading = ({ animateLoading }) => {
  return (
    <div className={classnames('slideshow__slide', { s1: animateLoading })}>
      <RingLoader size={100} color={'#fff'} loading={!animateLoading} />
    </div>
  );
};

export default Loading;
