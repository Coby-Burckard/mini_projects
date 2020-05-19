import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from '../components/homepage/Homepage';
import NASAPage from '../components/NASAPage/NASAPage';
import SnakePage from '../components/snakePage/SnakePage';
import WikiPage from '../components/wikiPage/WikiPage';
import StockPage from '../components/stockPage/StockPage';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/mini-one" exact>
          <NASAPage />
        </Route>
        <Route path="/mini-two" exact>
          <SnakePage />
        </Route>
        <Route path="/mini-three" exact>
          <p>Random Walk Disease</p>
        </Route>
        <Route path="/mini-four" exact>
          <WikiPage />
        </Route>
        <Route path="/mini-five" exact>
          <StockPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoute;
