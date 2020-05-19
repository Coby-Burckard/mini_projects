import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <NavLink to="mini-one">NASA image slider</NavLink>
      <NavLink to="/mini-two" exact>
        <p>Snake</p>
      </NavLink>
      <NavLink to="/mini-three" exact>
        <p>Random Walk Disease</p>
      </NavLink>
      <NavLink to="/mini-four" exact>
        <p>Wiki scraping</p>
      </NavLink>
      <NavLink to="/mini-five" exact>
        <p>Stock web sockets</p>
      </NavLink>
    </div>
  );
};

export default Navigation;
