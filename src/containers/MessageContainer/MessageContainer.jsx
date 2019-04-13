import React from 'react';
import PropTypes from 'prop-types';

import { SubjectType } from '../Message/Message';
import BubbleContainer, { AlignType } from '../../components/bubbleContainer/bubbleContainer';
import computeMessageSentAtCumulativeTime from './helper';

class MessageContainer extends React.Component {
  constructor(props) {
    super(props);

    const {
      subject,
      messageContainerTimeDeley,
      messageDelay,
      autoscroll,
      interactive,
      children,
    } = this.props;
    this.state = {
      subject,
      messageContainerTimeDeley,
      messageDelay,
      autoscroll,
      messages: children,
      interactive,
      messageSentAtCumulativeTime: computeMessageSentAtCumulativeTime(children, messageDelay),
    };
  }

  render() {
    const {
      subject,
      messages,
      messageContainerTimeDeley,
      messageSentAtCumulativeTime,
      messageDelay,
      autoscroll,
      interactive,
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
          lastInContainer: messages instanceof Array ? index === messages.length - 1 : true,
          autoscroll,
          interactive,
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
  autoscroll: PropTypes.bool,
  interactive: PropTypes.bool,
};

MessageContainer.defaultProps = {
  messageContainerTimeDeley: 0,
  messageDelay: [],
  autoscroll: true,
  interactive: true,
};

export default MessageContainer;
