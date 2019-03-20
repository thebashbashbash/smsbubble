import React from 'react';
import PropTypes from 'prop-types';

import { computeTypingSpeed } from '../../helpers/helpers';

import { SubjectType } from '../Message/Message';
import BubbleContainer, { AlignType } from '../../components/bubbleContainer/bubbleContainer';

class MessageContainer extends React.Component {
  constructor(props) {
    super(props);

    const {
      subject, messageContainerTimeDeley, messageDeleys, children,
    } = this.props;

    this.state = {
      subject,
      messageContainerTimeDeley,
      messageDeleys,
      messages: children,
      messageSentAtCumulativeTime: children
        .map(child => computeTypingSpeed(child.props.children))
        .reduce(
          (previous, current, index) => {
            previous.push((previous[index] || 0) + current + messageDeleys[index]);
            return previous;
          },
          [0],
        ),
    };
  }

  render() {
    const {
      subject,
      messages,
      messageContainerTimeDeley,
      messageSentAtCumulativeTime,
      messageDeleys,
    } = this.state;

    // console.log(subject, messageContainerTimeDeley);

    return (
      <BubbleContainer
        subject={subject}
        align={subject === SubjectType.Me ? AlignType.End : AlignType.Start}
      >
        {React.Children.map(messages, (child, index) => React.cloneElement(child, {
          sentAtCumultiveTime: messageContainerTimeDeley + messageSentAtCumulativeTime[index],
          messageTailShouldShowAfterDeley: messageDeleys[index],
          isLastMessageInContainer: index === messages.length - 1,
        }))}
      </BubbleContainer>
    );
  }
}

MessageContainer.propTypes = {
  messageContainerTimeDeley: PropTypes.number,
  messageDeleys: PropTypes.arrayOf(PropTypes.number),
  subject: PropTypes.oneOf([SubjectType.Me, SubjectType.You]).isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

MessageContainer.defaultProps = {
  messageContainerTimeDeley: 0,
  messageDeleys: [],
};

export default MessageContainer;
