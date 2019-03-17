/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import Bubble from '../bubble/bubble';

import classes from './bubbleContainer.module.css';

const bubbleContainer = ({ color, align, children }) => (
  <div
    className={[
      classes.BubbleContainer,
      align === 'start' ? classes.StartAlign : classes.EndAlign,
    ].join(' ')}
  >
    {React.Children.map(children, (child, index) => React.cloneElement(child, {
      color,
      tail:
          child.props.tail !== ''
            ? child.props.tail
            : children.length - 1 === index || !Array.isArray(children)
              ? 'pointerTail'
              : '',
    }))}
  </div>
);

bubbleContainer.propTypes = {
  color: PropTypes.oneOf(['gray', 'blue']).isRequired,
  align: PropTypes.oneOf(['start', 'end']).isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

bubbleContainer.defaultProps = {
  children: PropTypes.instanceOf(Bubble),
};

export default bubbleContainer;
