/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import CombineClasses from '../../helpers/helpers';
import classes from './bubble.module.css';

export const TailType = {
  PointerTail: 'pointerTail',
  TrailTail: 'trailTail',
  None: '',
};

export const ColorType = {
  Blue: 'blue',
  Gray: 'gray',
  None: '',
};

const bubble = ({ color, tail, children }) => (
  <div className={color === ColorType.Blue ? classes.Blue : classes.Gray}>
    <div
      className={CombineClasses(
        classes.Bubble,
        tail === TailType.None
          ? []
          : tail === TailType.PointerTail
            ? classes.PointerTail
            : classes.TrailTail,
      )}
    >
      {children}
    </div>
  </div>
);

bubble.propTypes = {
  color: PropTypes.oneOf([ColorType.Gray, ColorType.Blue]),
  tail: PropTypes.oneOf([TailType.PointerTail, TailType.TrailTail, TailType.None]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

bubble.defaultProps = {
  color: ColorType.Blue,
  tail: TailType.None,
  children: <div />,
};

export default bubble;
