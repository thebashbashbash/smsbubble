/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ReactGA from 'react-ga';

import AwesomeButton from 'react-native-really-awesome-button';

import classes from './PickResumePage.module.css';

ReactGA.initialize('UA-139986234-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const pickResumePage = () => (
  <div className={classes.Container}>
    <div>hej</div>
    <AwesomeButton>Text</AwesomeButton>;
  </div>
);

export default pickResumePage;
