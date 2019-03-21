import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import ResumePage from './containers/Pages/ResumePage/ResumePage';
import OleBirthdayPageDay1 from './containers/Pages/OleBirthdayPage/Day1/OleBirthdayPageDay1';

const main = () => (
  <BrowserRouter>
    <Route path="/" exact component={OleBirthdayPageDay1} />
  </BrowserRouter>
);

export default main;
