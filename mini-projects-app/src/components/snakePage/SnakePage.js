import React from 'react';
import SnakeGame from './SnakeGame';
import TitleBlock from '../page/TitleBlock';

const SnakePage = () => {
  return (
    <>
      <TitleBlock title="Modified Snake">
        <p className="modal__p">
          A frontend mini project. The classic arcade game, Snake, with a twist.
          The user is able to control the rate at which their snake’s speed
          increases after consuming food. Taking advantage of React’s
          re-rendering on state change, this version of snake is implicitly
          animated.{' '}
          <a
            className="modal__link"
            href="https://overreacted.io/making-setinterval-declarative-with-react-hooks/"
          >
            Dan Abramov’s useInterval hook
          </a>{' '}
          is used to circumvent useEffect + setInterval’s closure constraints.
        </p>
      </TitleBlock>
      <SnakeGame />
    </>
  );
};

export default SnakePage;
