import React from 'react';
import PropTypes from 'prop-types';

import CombineClasses from '../../helpers/helpers';
import { ColorType } from '../bubble/bubble';

import classes from './loadingIndicator.module.css';

const loadingIndicator = ({ color }) => (
  <div className={classes.Loading}>
    <div
      className={CombineClasses(
        color === ColorType.Blue ? classes.Blue : classes.Gray,
        classes.Dot,
        classes.One,
      )}
    />
    <div
      className={CombineClasses(
        color === ColorType.Blue ? classes.Blue : classes.Gray,
        classes.Dot,
        classes.Two,
      )}
    />
    <div
      className={CombineClasses(
        color === ColorType.Blue ? classes.Blue : classes.Gray,
        classes.Dot,
        classes.Three,
      )}
    />
  </div>
);

loadingIndicator.propTypes = {
  color: PropTypes.oneOf([ColorType.Gray, ColorType.Blue]).isRequired,
};

export default loadingIndicator;
