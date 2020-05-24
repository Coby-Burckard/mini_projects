import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from '../components/homepage/Homepage';
import NASAPage from '../components/NASAPage/NASAPage';
import SnakePage from '../components/snakePage/SnakePage';
import WikiPage from '../components/wikiPage/WikiPage';
import StockPage from '../components/stockPage/StockPage';
import Page from '../components/page/Page';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <div className="base-background"></div>
      <div className="middle-circle-one"></div>
      <div className="middle-circle-two"></div>
      <Route
        render={({ location }) => (
          <Switch location={location}>
            <Route path="/" exact>
              <Page>
                <Homepage />
              </Page>
            </Route>
            <Route path="/1" exact>
              <Page>
                <NASAPage />
              </Page>
            </Route>
            <Route path="/2" exact>
              <Page>
                <SnakePage />
              </Page>
            </Route>
            <Route path="/3" exact>
              <Page>
                <StockPage />
              </Page>
            </Route>
            <Route path="/4" exact>
              <Page>
                <WikiPage />
              </Page>
            </Route>
          </Switch>
        )}
      />
    </BrowserRouter>
  );
};

export default AppRoute;
