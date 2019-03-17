import React from 'react';
import PropTypes from 'prop-types';

import Bubble, { ColorType, TailType } from '../bubble/bubble';
import LoadingIndicator from '../loadingIndicator/loadingIndicator';

// import classes from './message.module.css';

export const SubjectTypes = {
  Me: 'me',
  You: 'you',
};

class Message extends React.Component {
  constructor(props) {
    super(props);

    const { subject, tail, children } = this.props;
    this.state = {
      loading: true,
      subject,
      tail,
      content: children,
    };
  }

  render() {
    const {
      loading, subject, tail, content,
    } = this.state;
    return (
      <Bubble
        tail={loading ? TailType.TrailTail : tail}
        color={subject === SubjectTypes.Me ? ColorType.Blue : ColorType.Gray}
      >
        {loading ? (
          <LoadingIndicator color={subject === SubjectTypes.Me ? ColorType.Blue : ColorType.Gray} />
        ) : (
          content
        )}
      </Bubble>
    );
  }
}

Message.propTypes = {
  subject: PropTypes.oneOf([SubjectTypes.Me, SubjectTypes.You]),
  tail: PropTypes.oneOf([TailType.PointerTail, TailType.TrailTail, TailType.None]),
  children: PropTypes.string,
};

Message.defaultProps = {
  subject: SubjectTypes.Me,
  children: <div />,
  tail: TailType.None,
};

export default Message;
