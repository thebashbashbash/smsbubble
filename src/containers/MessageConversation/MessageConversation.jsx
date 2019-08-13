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

    const { children, interactive, autoscroll } = this.props;

    this.state = {
      messageContainers: children,
      conversationStartDeley: computeConversationStartDeley(),
      messageDelay: computeMessageDeley(children),
      messageContainerTimeDeley: computeMessageContainerTimeDeley(children),
      autoscroll,
      interactive,
    };
  }

  render() {
    const {
      messageContainers,
      conversationStartDeley,
      messageDelay,
      messageContainerTimeDeley,
      autoscroll,
      interactive,
    } = this.state;

    return (
      <div>
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
            interactive,
          }))}
        </div>
      </div>
    );
  }
}

MessageConversation.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  interactive: PropTypes.bool.isRequired,
  autoscroll: PropTypes.bool.isRequired,
};

export default MessageConversation;
