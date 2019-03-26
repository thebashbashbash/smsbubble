/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import {
  computeMessageDeley,
  computeConversationStartDeley,
  computeMessageContainerTimeDeley,
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
    };
  }

  render() {
    const {
      messageContainers,
      conversationStartDeley,
      messageDelay,
      messageContainerTimeDeley,
    } = this.state;

    return (
      <div className={classes.MessageConversation}>
        {React.Children.map(messageContainers, (child, index) => React.cloneElement(child, {
          messageDelay: messageContainers instanceof Array ? messageDelay[index] : messageDelay,
          messageContainerTimeDeley:
              index === 0
                ? conversationStartDeley
                : conversationStartDeley
                  + messageDelay
                    .map(element => element.reduce((a, b) => a + b, 0))
                    .reduce(
                      (previous, current, subIndex) => {
                        previous.push((previous[subIndex] || 0) + current);
                        return previous;
                      },
                      [0],
                    )[index]
                  + messageContainerTimeDeley[index],
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
