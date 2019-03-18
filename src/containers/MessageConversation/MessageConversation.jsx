import React from 'react';
import PropTypes from 'prop-types';

import classes from './MessageConversation.module.css';

// import { computeTypingSpeed, getRandomInt } from '../../helpers/helpers';

// import { SubjectType } from '../Message/Message';
// import BubbleContainer, { AlignType } from '../../containers/MessageContainer/MessageContainer';

class MessageConversation extends React.Component {
  constructor(props) {
    super(props);

    const { children } = this.props;

    this.state = {
      messageContainers: children,
      messageContainerActivedAtCumulativeTime: [],
    };
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { messageContainers, messageContainerActivedAtCumulativeTime } = this.state;
    return <div className={classes.MessageConversation}>{messageContainers}</div>;
  }
}

MessageConversation.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

export default MessageConversation;
