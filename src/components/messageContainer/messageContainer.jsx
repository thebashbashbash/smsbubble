import React from 'react';
import PropTypes from 'prop-types';

import { SubjectTypes } from '../message/message';
import BubbleContainer, { AlignTypes } from '../bubbleContainer/bubbleContainer';

// import classes from './message.module.css';

class MessageContainer extends React.Component {
  constructor(props) {
    super(props);

    const { subject, children } = this.props;
    this.state = {
      subject,
      children,
    };
  }

  render() {
    const { subject, children } = this.state;
    return (
      <BubbleContainer
        subject={subject}
        align={subject === SubjectTypes.Me ? AlignTypes.End : AlignTypes.Start}
      >
        {children}
      </BubbleContainer>
    );
  }
}

MessageContainer.propTypes = {
  subject: PropTypes.oneOf([SubjectTypes.Me, SubjectTypes.You]).isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MessageContainer;
