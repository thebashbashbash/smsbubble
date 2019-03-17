import React from 'react';
import PropTypes from 'prop-types';

import { ColorTypes } from '../bubble/bubble';

import classes from './loadingIndicator.module.css';

const loadingIndicator = ({ color }) => (
  <div className={classes.Loading}>
    <div
      className={[
        color === ColorTypes.Blue ? classes.Blue : classes.Gray,
        classes.Dot,
        classes.One,
      ].join(' ')}
    />
    <div
      className={[
        color === ColorTypes.Blue ? classes.Blue : classes.Gray,
        classes.Dot,
        classes.Two,
      ].join(' ')}
    />
    <div
      className={[
        color === ColorTypes.Blue ? classes.Blue : classes.Gray,
        classes.Dot,
        classes.Three,
      ].join(' ')}
    />
  </div>
);

loadingIndicator.propTypes = {
  color: PropTypes.oneOf([ColorTypes.Gray, ColorTypes.Blue]).isRequired,
};

export default loadingIndicator;
