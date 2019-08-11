import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import FunResumePage from './containers/Pages/FunResumePage/FunResumePage';
import ResumePage from './containers/Pages/ResumePage/ResumePage';
import ErrorPage from './containers/Pages/ErrorPage/ErrorPage';

const main = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={FunResumePage} />
      <Route path="/resume" exact component={ResumePage} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default main;
