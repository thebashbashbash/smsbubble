import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import FunResumePage from './containers/Pages/FunResumePage/FunResumePage';
import NerdyResumePage from './containers/Pages/NerdyResumePage/NerdyResumePage';
import TraditionalResumePage from './containers/Pages/TraditionalResumePage/TraditionalResumePage';
import PickResumePage from './containers/Pages/PickResumePage/PickResumePage';
import ErrorPage from './containers/Pages/ErrorPage/ErrorPage';

const main = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={FunResumePage} />
      <Route path="/resume" exact component={PickResumePage} />
      <Route path="/traditionalresume" exact component={TraditionalResumePage} />
      <Route path="/funresume" exact component={FunResumePage} />
      <Route path="/nerdyresume" component={NerdyResumePage} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default main;
