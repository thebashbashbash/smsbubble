/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import { combineClasses } from '../../helpers/helpers';
import { ColorType } from '../bubble/bubble';
import { SubjectType } from '../../containers/Message/Message';

import classes from './bubbleContainer.module.css';

export const AlignType = {
  Start: 'start',
  End: 'end',
};

const bubbleContainer = ({
  color, subject, align, children,
}) => (
  <div
    className={combineClasses(
      classes.BubbleContainer,
      align === AlignType.Start ? classes.StartAlign : classes.EndAlign,
    )}
  >
    {React.Children.map(children, child => React.cloneElement(child, {
      color,
      subject,
      tail: child.props.tail,
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
