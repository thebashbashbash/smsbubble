import React from 'react';
import PropTypes from 'prop-types';

import classes from './MessageConversation.module.css';

import { computeTypingSpeed, getRandomInt } from '../../helpers/helpers';

class MessageConversation extends React.Component {
  constructor(props) {
    super(props);

    const { children } = this.props;

    this.state = {
      messageContainers: children,
      conversationStartDeley: getRandomInt(300, 1000),
      messageDeleys:
        children instanceof Array
          ? children
            .map(child => child.props.children)
            .map(element => element.map(subElement => subElement.props.children))
            .map(element => element.map(() => getRandomInt(300, 1000)))
          : children.props.children.map(() => getRandomInt(300, 1000)),
      messageContainerActivedAtCumulativeTime:
        children instanceof Array
          ? children
            .map(child => child.props.children)
            .map(element => element.map(subElement => subElement.props.children))
            .map(element => element.map(subElement => computeTypingSpeed(subElement)))
            .map(element => element.reduce((a, b) => a + b, 0))
          : [0],
    };
  }

  render() {
    const {
      messageContainers,
      conversationStartDeley,
      messageDeleys,
      messageContainerActivedAtCumulativeTime,
    } = this.state;

    return (
      <div className={classes.MessageConversation}>
        {React.Children.map(messageContainers, (child, index) => React.cloneElement(child, {
          messageDeleys: messageDeleys[index],
          messageContainerTimeDeley:
              index === 0
                ? conversationStartDeley
                : conversationStartDeley
                  + messageDeleys[index - 1].reduce((a, b) => a + b, 0)
                  + messageContainerActivedAtCumulativeTime[index - 1],
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
