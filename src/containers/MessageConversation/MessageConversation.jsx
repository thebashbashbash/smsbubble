/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import classes from './MessageConversation.module.css';

import { computeTypingSpeed, getRandomInt } from '../../helpers/helpers';

class MessageConversation extends React.Component {
  constructor(props) {
    super(props);

    const { children } = this.props;

    const messageDelayMin = 700;
    const messageDelayMax = 2000;

    this.state = {
      messageContainers: children,
      conversationStartDeley: getRandomInt(messageDelayMin / 2, messageDelayMax / 2),
      messageDelay:
        children instanceof Array
          ? children
            .map(child => child.props.children)
            .map(element => element.map(subElement => subElement.props.children))
            .map(element => element.map(() => getRandomInt(messageDelayMin, messageDelayMax)))
          : children.props.children instanceof Array
            ? children.props.children.map(() => getRandomInt(messageDelayMin, messageDelayMax))
            : getRandomInt(messageDelayMin, messageDelayMax),
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
          messageDelay:
              messageContainers instanceof Array ? messageDelay[index] : messageDelay,
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
