/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import classes from './MessageConversation.module.css';

import { computeTypingSpeed, getRandomInt } from '../../helpers/helpers';

const messageDelayMinDefault = 700;
const messageDelayMaxDefault = 2000;

const computeMessageDeley = (
  children,
  messageDelayMin = messageDelayMinDefault,
  messageDelayMax = messageDelayMaxDefault,
) => (children instanceof Array
  ? children
    .map(child => child.props.children)
    .map(element => element.map(subElement => subElement.props.children))
    .map(element => element.map(() => getRandomInt(messageDelayMin, messageDelayMax)))
  : children.props.children instanceof Array
    ? children.props.children.map(() => getRandomInt(messageDelayMin, messageDelayMax))
    : getRandomInt(messageDelayMin, messageDelayMax));

const computeConversationStartDeley = (
  messageDelayMin = messageDelayMinDefault / 2,
  messageDelayMax = messageDelayMaxDefault / 2,
) => getRandomInt(messageDelayMin / 2, messageDelayMax / 2);

class MessageConversation extends React.Component {
  constructor(props) {
    super(props);

    const { children } = this.props;

    this.state = {
      messageContainers: children,
      conversationStartDeley: computeConversationStartDeley(),
      messageDelay: computeMessageDeley(children),
      messageContainerActivedAtCumulativeTime:
        children instanceof Array
          ? children
            .map(child => child.props.children)
            .map(element => element.map(subElement => subElement.props.children))
            .map(element => element.map(subElement => computeTypingSpeed(subElement)))
            .map(element => element.reduce((a, b) => a + b, 0))
            .reduce(
              (previous, current, index) => {
                previous.push((previous[index] || 0) + current);
                return previous;
              },
              [0],
            )
            .slice(0, -1)
          : [0],
    };
  }

  render() {
    const {
      messageContainers,
      conversationStartDeley,
      messageDelay,
      messageContainerActivedAtCumulativeTime,
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
                  + messageContainerActivedAtCumulativeTime[index],
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
