import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "../components/homepage/Homepage";
import NASAPage from "../components/NASAPage/NASAPage";

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
          <p>Snake</p>
        </Route>
        <Route path="/mini-three" exact>
          <p>Random Walk Disease</p>
        </Route>
        <Route path="/mini-four" exact>
          <p>Wiki scraping</p>
        </Route>
        <Route path="/mini-five" exact>
          <p>something with web sockets</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoute;
