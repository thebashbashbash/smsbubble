import React from 'react';
import PropTypes from 'prop-types';

import { computeTypingSpeed } from '../../helpers/helpers';

import Bubble, { ColorType, TailType } from '../bubble/bubble';
import LoadingIndicator from '../loadingIndicator/loadingIndicator';

// import classes from './message.module.css';

export const SubjectType = {
  Me: 'me',
  You: 'you',
};

export const StatusType = {
  IsHidden: 'isHidden',
  IsTyping: 'isTyping',
  IsSent: 'isSent',
};

class Message extends React.Component {
  constructor(props) {
    super(props);

    const {
      status, subject, tail, sentAtCumultiveTime, children,
    } = this.props;
    this.state = {
      status,
      subject,
      tail,
      sentAtCumultiveTime,
      content: children,
    };
  }

  // componentDidMount() {
  //   const { status, sentAtCumultiveTime } = this.state;

  //   if (status === StatusType.IsTyping) {
  //     setTimeout(() => {
  //       this.setState({ status: StatusType.IsSent });
  //     }, sentAtCumultiveTime);
  //   }
  // }

  render() {
    const {
      subject, tail, status, sentAtCumultiveTime, content,
    } = this.state;

    if (status === StatusType.IsHidden) {
      setTimeout(() => {
        this.setState({ status: StatusType.IsTyping });
        setTimeout(() => {
          this.setState({ status: StatusType.IsSent });
        }, computeTypingSpeed(content));
      }, sentAtCumultiveTime);
    }

    return (
      <Bubble
        hidden={status === StatusType.IsHidden}
        tail={status === StatusType.IsTyping ? TailType.TrailTail : tail}
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
  tail: PropTypes.oneOf([TailType.PointerTail, TailType.TrailTail, TailType.None]),
  status: PropTypes.oneOf([StatusType.IsHidden, StatusType.IsTyping, StatusType.IsSent]),
  sentAtCumultiveTime: PropTypes.number,
  children: PropTypes.string,
};

Message.defaultProps = {
  status: StatusType.IsHidden,
  subject: SubjectType.Me,
  tail: TailType.None,
  sentAtCumultiveTime: 0,
  children: <div />,
};

export default Message;
