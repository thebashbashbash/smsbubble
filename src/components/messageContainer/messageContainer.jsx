import React from 'react';
import PropTypes from 'prop-types';

import { computeTypingSpeed, getRandomInt } from '../../helpers/helpers';

import { SubjectType } from '../message/message';
import BubbleContainer, { AlignType } from '../bubbleContainer/bubbleContainer';

// import classes from './message.module.css';

class MessageContainer extends React.Component {
  constructor(props) {
    super(props);

    const { subject, children } = this.props;

    this.state = {
      subject,
      messages: children,
      messageSentAtCumulativeTime: children
        .map(child => computeTypingSpeed(child.props.children))
        .reduce(
          (previous, current, index) => {
            previous.push((previous[index] || 0) + current + getRandomInt(600, 2000));
            return previous;
          },
          [500],
        ),
    };
  }

  render() {
    const { subject, messages, messageSentAtCumulativeTime } = this.state;
    console.log(messageSentAtCumulativeTime);
    return (
      <BubbleContainer
        subject={subject}
        align={subject === SubjectType.Me ? AlignType.End : AlignType.Start}
      >
        {React.Children.map(messages, (child, index) => React.cloneElement(child, {
          sentAtCumultiveTime: messageSentAtCumulativeTime[index],
        }))}
      </BubbleContainer>
    );
  }
}

MessageContainer.propTypes = {
  subject: PropTypes.oneOf([SubjectType.Me, SubjectType.You]).isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

export default MessageContainer;
