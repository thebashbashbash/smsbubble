import React from 'react';
import PropTypes from 'prop-types';

import {
  computeMessageDelay,
  computeConversationStartDelay,
  computeMessageContainerTimeDelay,
  computeAccumulatedMessageDelay,
  messageDelayMinDefault,
  messageDelayMaxDefault,
} from './helpers';

import classes from './MessageConversation.module.css';

class MessageConversation extends React.Component {
  constructor(props) {
    super(props);

    const {
      children, interactive, autoscroll, messageDelayMin, messageDelayMax,
    } = this.props;

    this.state = {
      messageContainers: children,
      conversationStartDeley: computeConversationStartDelay(
        messageDelayMinDefault / 2,
        messageDelayMaxDefault / 2,
      ),
      messageDelay: computeMessageDelay(children, messageDelayMin, messageDelayMax),
      messageContainerTimeDeley: computeMessageContainerTimeDelay(children),
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
                    + computeAccumulatedMessageDelay(messageDelay, index)
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
  messageDelayMin: PropTypes.number,
  messageDelayMax: PropTypes.number,
};

MessageConversation.defaultProps = {
  messageDelayMin: messageDelayMinDefault,
  messageDelayMax: messageDelayMaxDefault,
};

export default MessageConversation;
