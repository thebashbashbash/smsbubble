import React from 'react';
import PropTypes from 'prop-types';

import {
  computeMessageDeley,
  computeConversationStartDeley,
  computeMessageContainerTimeDeley,
  computeAccumulatedMessageDeley,
} from './helpers';

import classes from './MessageConversation.module.css';

class MessageConversation extends React.Component {
  constructor(props) {
    super(props);

    const { children } = this.props;

    this.state = {
      messageContainers: children,
      conversationStartDeley: computeConversationStartDeley(),
      messageDelay: computeMessageDeley(children),
      messageContainerTimeDeley: computeMessageContainerTimeDeley(children),
      autoscroll: true,
    };
  }

  render() {
    const {
      messageContainers,
      conversationStartDeley,
      messageDelay,
      messageContainerTimeDeley,
      autoscroll,
    } = this.state;

    return (
      <div className={classes.MessageConversation}>
        {React.Children.map(messageContainers, (child, index) => React.cloneElement(child, {
          messageDelay: messageContainers instanceof Array ? messageDelay[index] : messageDelay,
          messageContainerTimeDeley:
              index === 0
                ? conversationStartDeley
                : conversationStartDeley
                  + computeAccumulatedMessageDeley(messageDelay, index)
                  + messageContainerTimeDeley[index],
          autoscroll,
        }))}
      </div>
    );
  }
}

MessageConversation.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

export default MessageConversation;
