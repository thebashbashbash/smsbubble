import React from 'react';
import PropTypes from 'prop-types';

import classes from './topBar.module.css';

const topBar = ({ children }) => <div className={classes.TopBar}>{children}</div>;

topBar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

topBar.defaultProps = {
  children: <div />,
};

export default topBar;
