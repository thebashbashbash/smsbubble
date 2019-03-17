import React from 'react';
import PropTypes from 'prop-types';

import classesBubble from './bubble.module.css';

const bubble = ({ color, tail, children }) => (
  <div className={color === 'blue' ? classesBubble.Blue : classesBubble.Gray}>
    <div className={[classesBubble.Bubble, tail ? classesBubble.Trail : []].join(' ')}>
      {children}
    </div>
  </div>
);

bubble.propTypes = {
  color: PropTypes.oneOf(['gray', 'blue']),
  tail: PropTypes.bool,
  // loading: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

bubble.defaultProps = {
  color: 'blue',
  tail: false,
  // loading: false,
  children: <div />,
};

export default bubble;
