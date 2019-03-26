/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import { computeTypingSpeed } from '../../helpers/helpers';

import Bubble, { ColorType, TailType } from '../../components/bubble/bubble';
import LoadingIndicator from '../../components/loadingIndicator/loadingIndicator';

export const SubjectType = {
  Me: 'me',
  You: 'you',
};

export const StatusType = {
  IsHidden: 'isHidden',
  IsTyping: 'isTyping',
  IsSentWithoutTail: 'IsSentWithoutTail',
  IsSentWithTail: 'IsSentWithTail',
};

class Message extends React.Component {
  constructor(props) {
    super(props);

    const {
      lastInContainer,
      status,
      subject,
      sentAtCumultiveTime,
      children,
      messageDelay,
    } = this.props;
    this.state = {
      lastInContainer,
      status,
      messageDelay,
      subject,
      sentAtCumultiveTime,
      content: children,
    };
  }

  render() {
    const {
      subject,
      status,
      sentAtCumultiveTime,
      messageDelay,
      lastInContainer,
      content,
    } = this.state;
    if (status === StatusType.IsHidden) {
      setTimeout(() => {
        this.setState({ status: StatusType.IsTyping });
        setTimeout(() => {
          this.setState({ status: StatusType.IsSentWithTail });
          if (!lastInContainer) {
            setTimeout(() => {
              this.setState({ status: StatusType.IsSentWithoutTail });
            }, messageDelay);
          }
        }, computeTypingSpeed(content));
      }, sentAtCumultiveTime);
    }

    return (
      <Bubble
        hidden={status === StatusType.IsHidden}
        tail={
          status === StatusType.IsTyping
            ? TailType.TrailTail
            : status === StatusType.IsSentWithTail
              ? TailType.PointerTail
              : TailType.None
        }
        color={subject === SubjectType.Me ? ColorType.Blue : ColorType.Gray}
      >
        {status === StatusType.IsTyping ? (
          <LoadingIndicator color={subject === SubjectType.Me ? ColorType.Blue : ColorType.Gray} />
        ) : (
          content
        )}
      </Bubble>
    );
  }
}

Message.propTypes = {
  subject: PropTypes.oneOf([SubjectType.Me, SubjectType.You]),
  messageDelay: PropTypes.number,
  lastInContainer: PropTypes.bool,
  status: PropTypes.oneOf([
    StatusType.IsHidden,
    StatusType.IsTyping,
    StatusType.IsSentWithoutTail,
    StatusType.IsSentWithTail,
  ]),
  sentAtCumultiveTime: PropTypes.number,
  children: PropTypes.string,
};

Message.defaultProps = {
  status: StatusType.IsHidden,
  subject: SubjectType.Me,
  messageDelay: 0,
  sentAtCumultiveTime: 0,
  lastInContainer: false,
  children: <div />,
};

export default Message;
