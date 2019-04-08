import React from 'react';
import PropTypes from 'prop-types';

import Linkify from 'react-linkify';
import Message from '../../../containers/Message/Message';

const textMessage = ({ children, ...other }) => (
  <Message {...other}>
    <Linkify>{children}</Linkify>
  </Message>
);

textMessage.propTypes = {
  children: PropTypes.string,
};

textMessage.defaultProps = {
  children: '',
};

export default textMessage;
