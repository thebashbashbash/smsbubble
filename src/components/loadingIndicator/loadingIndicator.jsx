import React from 'react';
import PropTypes from 'prop-types';

import classes from './loadingIndicator.module.css';

const loadingIndicator = ({ color }) => (
  <div className={classes.Loading}>
    <div
      className={[color === 'blue' ? classes.Blue : classes.Gray, classes.Dot, classes.One].join(
        ' ',
      )}
    />
    <div
      className={[color === 'blue' ? classes.Blue : classes.Gray, classes.Dot, classes.Two].join(
        ' ',
      )}
    />
    <div
      className={[color === 'blue' ? classes.Blue : classes.Gray, classes.Dot, classes.Three].join(
        ' ',
      )}
    />
  </div>
);

loadingIndicator.propTypes = {
  color: PropTypes.oneOf(['gray', 'blue']).isRequired,
};

export default loadingIndicator;
