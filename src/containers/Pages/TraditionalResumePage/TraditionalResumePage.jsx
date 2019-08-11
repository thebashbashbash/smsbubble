/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ReactGA from 'react-ga';

// import DynamicResumeInJson from '../../../assets/resumeInJson';

// import classes from './NerdyResumePage.module.css';

ReactGA.initialize('UA-139986234-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const traditionalResumePage = () => <div>traditionalResumePage</div>;

export default traditionalResumePage;
