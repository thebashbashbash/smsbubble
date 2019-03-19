import React from 'react';
import PropTypes from 'prop-types';

import classes from './MessageConversation.module.css';

import { computeTypingSpeed, getCumulativeSum } from '../../helpers/helpers';

// import { computeTypingSpeed, getRandomInt } from '../../helpers/helpers';

// import { SubjectType } from '../Message/Message';
// import BubbleContainer, { AlignType } from '../../containers/MessageContainer/MessageContainer';

class MessageConversation extends React.Component {
  constructor(props) {
    super(props);

    const { children } = this.props;

    this.state = {
      messageContainers: children,
      messageContainerActivedAtCumulativeTime:
        children instanceof Array
          ? children
            .map(child => child.props.children)
            .map(element => element.map(subElement => subElement.props.children))
            .map(element => element.map(subElement => computeTypingSpeed(subElement)))
            .map(element => element.reduce((a, b) => a + b, 0))
          : [0],
    };

    console.log(this.state.messageContainerActivedAtCumulativeTime);
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { messageContainers, messageContainerActivedAtCumulativeTime } = this.state;
    return (
      <div className={classes.MessageConversation}>
        {React.Children.map(messageContainers, (child, index) => React.cloneElement(child, {
          messageContainerTimeDeley:
              index === 0 ? 0 : messageContainerActivedAtCumulativeTime[index - 1],
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
