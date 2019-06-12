import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ResumePage from './containers/Pages/ResumePage/ResumePage';
import TraditionalResumePage from './containers/Pages/TraditionalResumePage/TraditionalResumePage';
import ErrorPage from './containers/Pages/ErrorPage/ErrorPage';

const main = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ResumePage} />
      <Route path="/resume" component={TraditionalResumePage} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default main;
