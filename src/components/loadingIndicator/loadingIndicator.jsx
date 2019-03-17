import React from 'react';
import PropTypes from 'prop-types';

import classes from './loadingIndicator.module.css';

const loadingIndicator = () => (
  <div className={classes.Loading}>
    <div className={[classes.Dot, classes.One].join(' ')} />
    <div className={[classes.Dot, classes.Two].join(' ')} />
    <div className={[classes.Dot, classes.Three].join(' ')} />
  </div>
);

export default loadingIndicator;
