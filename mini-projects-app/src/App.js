import React from 'react';
import AppRouter from './routers/AppRoute';
import BackgroundSVG from './components/images/BackgroundSVG';

const App = () => {
  return (
    <>
      <BackgroundSVG />
      <AppRouter />
    </>
  );
};

export default App;
