import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import NASALogo from '../logos/NASALogo';
import HomeLogo from '../logos/HomeLogo';
import SnakeLogo from '../logos/SnakeLogo';
import WikiLogo from '../logos/WikiLogo';
import StockLogo from '../logos/StockLogo';

const NavSection = props => {
  const location = useLocation();
  const currentRoute = location.pathname.split('/')[1];
  return (
    <>
      {props.nav.map(i => {
        if (i === +currentRoute) {
          return (
            <NavLink to="/">
              <HomeLogo />
            </NavLink>
          );
        }
        switch (i) {
          case 1:
            return (
              <NavLink to="1">
                <NASALogo />
              </NavLink>
            );
          case 2:
            return (
              <NavLink to="2">
                <SnakeLogo />
              </NavLink>
            );
          case 3:
            return (
              <NavLink to="3">
                <StockLogo />
              </NavLink>
            );
          case 4:
            return (
              <NavLink to="4">
                <WikiLogo />
              </NavLink>
            );
        }
      })}
    </>
  );
};

export default NavSection;
