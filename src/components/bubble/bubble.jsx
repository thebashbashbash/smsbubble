/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import posed from 'react-pose';

import { combineClasses } from '../../helpers/helpers';
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

const Bubble = posed.div({
  hiddenBlue: {
    opacity: 0,
    y: 10,
    x: 15,
    scale: 0.8,
  },
  hiddenGray: {
    opacity: 0,
    y: 10,
    x: -15,
    scale: 0.8,
  },
  notHidden: {
    scale: 1,
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: 'tween',
      duration: 250,
      ease: 'backOut',
    },
  },
});

const bubble = ({
  color, tail, hidden, children,
}) => (
  <Bubble
    className={hidden ? classes.Hidden : []}
    pose={hidden ? (color === ColorType.Blue ? 'hiddenBlue' : 'hiddenGray') : 'notHidden'}
  >
    <div className={combineClasses(color === ColorType.Blue ? classes.Blue : classes.Gray)}>
      <div
        className={combineClasses(
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
  </Bubble>
);

bubble.propTypes = {
  color: PropTypes.oneOf([ColorType.Gray, ColorType.Blue]),
  tail: PropTypes.oneOf([TailType.PointerTail, TailType.TrailTail, TailType.None]),
  hidden: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

bubble.defaultProps = {
  color: ColorType.Blue,
  tail: TailType.None,
  children: <div />,
};

export default bubble;
