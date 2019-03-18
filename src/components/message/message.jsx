import React from 'react';
import PropTypes from 'prop-types';

import Bubble, { ColorType, TailType } from '../bubble/bubble';
import LoadingIndicator from '../loadingIndicator/loadingIndicator';

// import classes from './message.module.css';

export const SubjectType = {
  Me: 'me',
  You: 'you',
};

class Message extends React.Component {
  constructor(props) {
    super(props);

    const {
      shouldLoad, subject, tail, children,
    } = this.props;
    this.state = {
      loading: subject === SubjectType.Me ? false : shouldLoad,
      subject,
      tail,
      content: children,
    };
  }

  componentDidMount() {
    const { content } = this.state;
    const typingSpeed = 3;

    setTimeout(() => {
      this.setState({ loading: false });
    }, typingSpeed * (1 / 10) * 1000 * parseInt(content.split(' ').length, 10));
  }

  render() {
    const {
      loading, subject, tail, content,
    } = this.state;
    return (
      <Bubble
        tail={loading ? TailType.TrailTail : tail}
        color={subject === SubjectType.Me ? ColorType.Blue : ColorType.Gray}
      >
        {loading ? (
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
  shouldLoad: PropTypes.bool,
  children: PropTypes.string,
};

Message.defaultProps = {
  shouldLoad: true,
  subject: SubjectType.Me,
  tail: TailType.None,
  children: <div />,
};

export default Message;
