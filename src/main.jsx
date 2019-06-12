import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ResumePage from './containers/Pages/ResumePage/ResumePage';
import TraditionalResumePage from './containers/Pages/TraditionalResumePage/TraditionalResumePage';

const main = () => (
  <BrowserRouter>
    <Route path="/" exact component={ResumePage} />
    <Route path="/resume" exact component={TraditionalResumePage} />
  </BrowserRouter>
);

export default main;
