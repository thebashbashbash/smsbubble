import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import FunResumePage from './containers/Pages/FunResumePage/FunResumePage';
import NerdyResumePage from './containers/Pages/NerdyResumePage/NerdyResumePage';
import ErrorPage from './containers/Pages/ErrorPage/ErrorPage';

const main = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={FunResumePage} />
      <Route path="/resume" component={NerdyResumePage} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default main;
