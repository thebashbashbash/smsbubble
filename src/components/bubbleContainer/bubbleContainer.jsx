/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import { TailTypes, ColorTypes } from '../bubble/bubble';
import { SubjectTypes } from '../message/message';

import classes from './bubbleContainer.module.css';

export const AlignTypes = {
  Start: 'start',
  End: 'end',
};

const bubbleContainer = ({
  color, subject, align, children,
}) => (
  <div
    className={[
      classes.BubbleContainer,
      align === AlignTypes.Start ? classes.StartAlign : classes.EndAlign,
    ].join(' ')}
  >
    {React.Children.map(children, (child, index) => React.cloneElement(child, {
      color,
      subject,
      tail:
          child.props.tail !== TailTypes.None
            ? child.props.tail
            : children.length - 1 === index || !Array.isArray(children)
              ? TailTypes.PointerTail
              : TailTypes.None,
    }))}
  </div>
);

bubbleContainer.propTypes = {
  color: PropTypes.oneOf([ColorTypes.Gray, ColorTypes.Blue]),
  align: PropTypes.oneOf([AlignTypes.Start, AlignTypes.End]).isRequired,
  subject: PropTypes.oneOf([SubjectTypes.Me, SubjectTypes.You]),
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

bubbleContainer.defaultProps = {
  color: ColorTypes.Blue,
  subject: SubjectTypes.Me,
};

export default bubbleContainer;
