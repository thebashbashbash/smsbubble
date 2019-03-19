import React from 'react';
import PropTypes from 'prop-types';

import { computeTypingSpeed, getRandomInt } from '../../helpers/helpers';

import { SubjectType } from '../Message/Message';
import BubbleContainer, { AlignType } from '../../components/bubbleContainer/bubbleContainer';

class MessageContainer extends React.Component {
  constructor(props) {
    super(props);

    const { subject, messageContainerTimeDeley, children } = this.props;
    // getRandomInt(600, 2000) getRandomInt(300, 1000) getRandomInt
    this.state = {
      subject,
      messageContainerTimeDeley,
      messages: children,
      messageSentAtCumulativeTime: children
        .map(child => computeTypingSpeed(child.props.children))
        .reduce(
          (previous, current, index) => {
            previous.push((previous[index] || 0) + current);
            return previous;
          },
          [0],
        ),
    };

    // console.log(this.state.messageSentAtCumulativeTime);
  }

  render() {
    const {
      subject,
      messages,
      messageContainerTimeDeley,
      messageSentAtCumulativeTime,
    } = this.state;
    return (
      <BubbleContainer
        subject={subject}
        align={subject === SubjectType.Me ? AlignType.End : AlignType.Start}
      >
        {React.Children.map(messages, (child, index) => React.cloneElement(child, {
          sentAtCumultiveTime: messageContainerTimeDeley + messageSentAtCumulativeTime[index],
        }))}
      </BubbleContainer>
    );
  }
}

MessageContainer.propTypes = {
  messageContainerTimeDeley: PropTypes.number,
  subject: PropTypes.oneOf([SubjectType.Me, SubjectType.You]).isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

MessageContainer.defaultProps = {
  messageContainerTimeDeley: 0,
};

export default MessageContainer;
