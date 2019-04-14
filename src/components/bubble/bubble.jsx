/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import posed from 'react-pose';
import Img from 'react-image';
import Linkify from 'react-linkify';

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
  notHiddenNonImage: {
    scale: 1,
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: 'tween',
      duration: 300,
      ease: 'backOut',
    },
  },
  notHiddenImage: {
    scale: 1,
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: 'tween',
      duration: 300,
    },
  },
});

const bubble = ({
  color, tail, hidden, imageContent, emojiContent, children, animate,
}) => (
  <Bubble
    className={hidden ? classes.Hidden : []}
    pose={
      animate
        ? hidden
          ? color === ColorType.Blue
            ? 'hiddenBlue'
            : 'hiddenGray'
          : imageContent
            ? 'notHiddenImage'
            : 'notHiddenNonImage'
        : 'notHiddenNonImage'
    }
  >
    <div
      className={combineClasses(
        color !== ColorType.None && !emojiContent
          ? color === ColorType.Blue
            ? classes.Blue
            : classes.Gray
          : classes.Bubble,
      )}
    >
      <div
        style={{
          padding: imageContent || emojiContent ? 0 : [],
          overflow: imageContent ? 'hidden' : [],
          fontSize: emojiContent ? '3.5rem' : 'inherit',
        }}
        className={combineClasses(
          classes.Bubble,
          imageContent
            ? []
            : tail === TailType.None
              ? []
              : tail === TailType.PointerTail
                ? classes.PointerTail
                : classes.TrailTail,
        )}
      >
        {imageContent === false ? <Linkify>{children}</Linkify> : <Img src={children} />}
      </div>
    </div>
  </Bubble>
);

bubble.propTypes = {
  color: PropTypes.oneOf([ColorType.Gray, ColorType.Blue]),
  tail: PropTypes.oneOf([TailType.PointerTail, TailType.TrailTail, TailType.None]),
  hidden: PropTypes.bool.isRequired,
  imageContent: PropTypes.bool,
  emojiContent: PropTypes.bool,
  animate: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

bubble.defaultProps = {
  color: ColorType.Blue,
  tail: TailType.None,
  imageContent: false,
  emojiContent: false,
  animate: true,
  children: <div />,
};

export default bubble;
