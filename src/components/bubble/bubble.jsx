import React from 'react';
import PropTypes from 'prop-types';

import classes from './bubble.module.css';

const bubble = ({ color, tail, children }) => (
  <div className={color === 'blue' ? classes.Blue : classes.Gray}>
    <div className={[classes.Bubble, tail ? classes.Tail : []].join(' ')}>{children}</div>
  </div>
);

bubble.propTypes = {
  color: PropTypes.oneOf(['gray', 'blue']).isRequired,
  tail: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

bubble.defaultProps = {
  tail: false,
  children: <div />,
};

export default bubble;
