import React from 'react';
import PropTypes from 'prop-types';

import classes from './bubble.module.css';

const bubble = ({ gray, last, content }) => (
  <div className={gray ? classes.gray : classes.blue}>
    <div className={[classes.bubble, last ? classes.last : []].join(' ')}>
      {content}
    </div>
  </div>
);

bubble.propTypes = {
  gray: PropTypes.bool,
  last: PropTypes.bool,
  content: PropTypes.string,
};

bubble.defaultProps = {
  gray: false,
  last: false,
  content: '',
};

export default bubble;
