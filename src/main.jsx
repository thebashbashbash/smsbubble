import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ResumePage from './containers/Pages/ResumePage/ResumePage';

const main = () => (
  <BrowserRouter>
    <Route path="/" exact component={ResumePage} />
  </BrowserRouter>
);

export default main;
