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
  color, tail, hidden, image, children,
}) => (
  <Bubble
    className={hidden ? classes.Hidden : []}
    pose={hidden ? (color === ColorType.Blue ? 'hiddenBlue' : 'hiddenGray') : 'notHidden'}
  >
    <div
      className={combineClasses(
        color !== ColorType.None
          ? color === ColorType.Blue
            ? classes.Blue
            : classes.Gray
          : classes.Bubble,
      )}
    >
      <div
        style={{ padding: image ? 0 : [], overflow: image ? 'hidden' : [] }}
        className={combineClasses(
          classes.Bubble,
          image
            ? []
            : tail === TailType.None
              ? []
              : tail === TailType.PointerTail
                ? classes.PointerTail
                : classes.TrailTail,
        )}
      >
        {image === false ? children : <img src={children} alt="" />}
      </div>
    </div>
  </Bubble>
);

bubble.propTypes = {
  color: PropTypes.oneOf([ColorType.Gray, ColorType.Blue]),
  tail: PropTypes.oneOf([TailType.PointerTail, TailType.TrailTail, TailType.None]),
  hidden: PropTypes.bool.isRequired,
  image: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

bubble.defaultProps = {
  color: ColorType.Blue,
  tail: TailType.None,
  image: false,
  children: <div />,
};

export default bubble;
