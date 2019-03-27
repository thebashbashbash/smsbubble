import React from 'react';
import PropTypes from 'prop-types';

import { computeTypingSpeed } from '../../helpers/helpers';

import { SubjectType } from '../Message/Message';
import BubbleContainer, { AlignType } from '../../components/bubbleContainer/bubbleContainer';

class MessageContainer extends React.Component {
  constructor(props) {
    super(props);

    const {
      subject, messageContainerTimeDeley, messageDelay, children,
    } = this.props;

    this.state = {
      subject,
      messageContainerTimeDeley,
      messageDelay,
      messages: children,
      messageSentAtCumulativeTime:
        children instanceof Array
          ? children
            .map(child => computeTypingSpeed(child.props.children))
            .reduce(
              (previous, current, index) => {
                previous.push((previous[index] || 0) + current + messageDelay[index]);
                return previous;
              },
              [0],
            )
          : computeTypingSpeed(children.props.children),
    };
  }

  render() {
    const {
      subject,
      messages,
      messageContainerTimeDeley,
      messageSentAtCumulativeTime,
      messageDelay,
    } = this.state;

    return (
      <BubbleContainer
        subject={subject}
        align={subject === SubjectType.Me ? AlignType.End : AlignType.Start}
      >
        {React.Children.map(messages, (child, index) => React.cloneElement(child, {
          sentAtCumultiveTime:
              messageContainerTimeDeley
              + (messages instanceof Array ? messageSentAtCumulativeTime[index] : 0),
          messageDelay: messages instanceof Array ? messageDelay[index] : messageDelay,
          lastInContainer: index === messages.length - 1,
        }))}
      </BubbleContainer>
    );
  }
}

MessageContainer.propTypes = {
  messageContainerTimeDeley: PropTypes.number,
  messageDelay: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  subject: PropTypes.oneOf([SubjectType.Me, SubjectType.You]).isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

MessageContainer.defaultProps = {
  messageContainerTimeDeley: 0,
  messageDelay: [],
};

export default MessageContainer;
