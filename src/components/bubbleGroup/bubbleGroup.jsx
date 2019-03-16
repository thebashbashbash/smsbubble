import React from 'react';
import PropTypes from 'prop-types';
import Bubble from '../bubble/bubble';

import classesBubbleGroup from './bubbleGroup.module.css';
import classesBubble from '../bubble/bubble.module.css';

const bubbleGroup = ({ color, children }) => (
  <div className={classesBubbleGroup.bubbleGroup}>
    {React.Children.map(children, (child, index, array) => React.cloneElement(child, {
      color,
      tail: array.length - 1 === index ? classesBubble.Tail : [],
    }))}
  </div>
);

bubbleGroup.propTypes = {
  color: PropTypes.oneOf(['gray', 'blue']).isRequired,
  children: PropTypes.element,
};

bubbleGroup.defaultProps = {
  children: PropTypes.instanceOf(Bubble),
};

export default bubbleGroup;
