import React from 'react';
import PropTypes from 'prop-types';

import CombineClasses from '../../helpers/helpers';
import { ColorTypes } from '../bubble/bubble';

import classes from './loadingIndicator.module.css';

const loadingIndicator = ({ color }) => (
  <div className={classes.Loading}>
    <div
      className={CombineClasses(
        color === ColorTypes.Blue ? classes.Blue : classes.Gray,
        classes.Dot,
        classes.One,
      )}
    />
    <div
      className={CombineClasses(
        color === ColorTypes.Blue ? classes.Blue : classes.Gray,
        classes.Dot,
        classes.Two,
      )}
    />
    <div
      className={CombineClasses(
        color === ColorTypes.Blue ? classes.Blue : classes.Gray,
        classes.Dot,
        classes.Three,
      )}
    />
  </div>
);

loadingIndicator.propTypes = {
  color: PropTypes.oneOf([ColorTypes.Gray, ColorTypes.Blue]).isRequired,
};

export default loadingIndicator;
