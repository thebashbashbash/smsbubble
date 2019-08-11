/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ReactGA from 'react-ga';

import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

import classes from './PickResumePage.module.css';

ReactGA.initialize('UA-139986234-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const pickResumePage = () => (
  <div>
    <div className={classes.Heading}>What kind of resume would you like to see?</div>
    <div className={classes.ButtonContainer}>
      <AwesomeButton type="primary">Traditional</AwesomeButton>
      <AwesomeButton type="primary">Nerdy</AwesomeButton>
      <AwesomeButton type="primary">Fun</AwesomeButton>
    </div>
  </div>
);

export default pickResumePage;
