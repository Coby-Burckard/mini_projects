import React from 'react';
import NavSection from './NavSection';

const Page = props => {
  return (
    <div className="page">
      <div className="page__section--side">
        <NavSection nav={[1, 2]} />
      </div>
      <div className="page__section--center">{props.children}</div>
      <div className="page__section--side">
        <NavSection nav={[3, 4]} />
      </div>
    </div>
  );
};

export default Page;
