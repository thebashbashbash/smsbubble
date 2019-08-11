/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ReactGA from 'react-ga';

import classes from './TraditionalResumePage.module.css';

ReactGA.initialize('UA-139986234-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const traditionalResumePage = () => (
  <div className={classes.Container}>
    <h2>about me</h2>
    <h2>education</h2>
    <h2>work experience</h2>
    <h2>skills</h2>
    <h2>interests</h2>
  </div>
);

export default traditionalResumePage;
