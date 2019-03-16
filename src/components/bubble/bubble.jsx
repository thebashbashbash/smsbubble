import React from 'react';
import PropTypes from 'prop-types';

import classesBubble from './bubble.module.css';
// import classesBubbleLoading from './bubbleLoading.module.css';

const bubble = ({ color, tail, children }) => (
  <div className={color === 'blue' ? classesBubble.Blue : classesBubble.Gray}>
    <div className={[classesBubble.Bubble, tail ? classesBubble.Tail : []].join(' ')}>
      {children}
    </div>
  </div>
);

bubble.propTypes = {
  color: PropTypes.oneOf(['gray', 'blue']),
  tail: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

bubble.defaultProps = {
  color: 'blue',
  tail: false,
  children: <div />,
};

export default bubble;
