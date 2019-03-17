/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import classes from './bubble.module.css';

const bubble = ({ color, tail, children }) => (
  <div className={color === 'blue' ? classes.Blue : classes.Gray}>
    <div
      className={[
        classes.Bubble,
        tail === '' ? [] : tail === 'pointerTail' ? classes.PointerTail : classes.TrailTail,
      ].join(' ')}
    >
      {children}
    </div>
  </div>
);

bubble.propTypes = {
  color: PropTypes.oneOf(['gray', 'blue']),
  tail: PropTypes.oneOf(['pointerTail', 'trailTail', '']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

bubble.defaultProps = {
  color: 'blue',
  tail: '',
  children: <div />,
};

export default bubble;
