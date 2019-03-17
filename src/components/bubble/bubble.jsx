/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import CombineClasses from '../../helpers/helpers';
import classes from './bubble.module.css';

export const TailTypes = {
  PointerTail: 'pointerTail',
  TrailTail: 'trailTail',
  None: '',
};

export const ColorTypes = {
  Blue: 'blue',
  Gray: 'gray',
  None: '',
};

const bubble = ({ color, tail, children }) => (
  <div className={color === ColorTypes.Blue ? classes.Blue : classes.Gray}>
    <div
      className={CombineClasses(
        classes.Bubble,
        tail === TailTypes.None
          ? []
          : tail === TailTypes.PointerTail
            ? classes.PointerTail
            : classes.TrailTail,
      )}
    >
      {children}
    </div>
  </div>
);

bubble.propTypes = {
  color: PropTypes.oneOf([ColorTypes.Gray, ColorTypes.Blue]),
  tail: PropTypes.oneOf([TailTypes.PointerTail, TailTypes.TrailTail, TailTypes.None]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

bubble.defaultProps = {
  color: ColorTypes.Blue,
  tail: TailTypes.None,
  children: <div />,
};

export default bubble;
