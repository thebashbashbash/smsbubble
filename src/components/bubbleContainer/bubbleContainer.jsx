/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import CombineClasses from '../../helpers/helpers';
import { TailType, ColorType } from '../bubble/bubble';
import { SubjectType } from '../message/message';

import classes from './bubbleContainer.module.css';

export const AlignType = {
  Start: 'start',
  End: 'end',
};

const bubbleContainer = ({
  color, subject, align, children,
}) => (
  <div
    className={CombineClasses(
      classes.BubbleContainer,
      align === AlignType.Start ? classes.StartAlign : classes.EndAlign,
    )}
  >
    {React.Children.map(children, (child, index) => React.cloneElement(child, {
      color,
      subject,
      tail:
          child.props.tail !== TailType.None
            ? child.props.tail
            : children.length - 1 === index || !Array.isArray(children)
              ? TailType.PointerTail
              : TailType.None,
    }))}
  </div>
);

bubbleContainer.propTypes = {
  color: PropTypes.oneOf([ColorType.Gray, ColorType.Blue]),
  align: PropTypes.oneOf([AlignType.Start, AlignType.End]).isRequired,
  subject: PropTypes.oneOf([SubjectType.Me, SubjectType.You]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

bubbleContainer.defaultProps = {
  color: ColorType.Blue,
  subject: SubjectType.Me,
};

export default bubbleContainer;
