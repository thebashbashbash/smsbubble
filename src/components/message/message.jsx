import React from 'react';
import PropTypes from 'prop-types';

import Bubble, { ColorTypes, TailTypes } from '../bubble/bubble';

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
      subject,
      tail,
      content: children,
    };
  }

  render() {
    const { content, subject, tail } = this.state;
    return (
      <Bubble tail={tail} color={subject === SubjectTypes.Me ? ColorTypes.Blue : ColorTypes.Gray}>
        {content}
      </Bubble>
    );
  }
}

Message.propTypes = {
  subject: PropTypes.oneOf([SubjectTypes.Me, SubjectTypes.You]),
  tail: PropTypes.oneOf([TailTypes.PointerTail, TailTypes.TrailTail, TailTypes.None]),
  children: PropTypes.string,
};

Message.defaultProps = {
  subject: SubjectTypes.Me,
  children: <div />,
  tail: TailTypes.None,
};

export default Message;
