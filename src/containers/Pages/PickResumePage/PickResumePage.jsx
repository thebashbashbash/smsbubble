/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ReactGA from 'react-ga';

import classes from './PickResumePage.module.css';

ReactGA.initialize('UA-139986234-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const pickResumePage = () => (
  <div className={classes.Container}>
    <div>hej</div>
  </div>
);

export default pickResumePage;
