import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// eslint-disable-next-line import/no-named-as-default
import FunResumePage from './containers/Pages/FunResumePage/FunResumePage';
import ResumePage from './containers/Pages/ResumePage/ResumePage';
import ErrorPage from './containers/Pages/ErrorPage/ErrorPage';

const main = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={FunResumePage} />
      <Route path="/resume" exact component={ResumePage} />
      <Route path="/smsresume" exact component={FunResumePage} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default main;
