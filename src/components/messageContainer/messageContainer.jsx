import React from 'react';
import PropTypes from 'prop-types';

import { SubjectType } from '../message/message';
import BubbleContainer, { AlignType } from '../bubbleContainer/bubbleContainer';

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
        align={subject === SubjectType.Me ? AlignType.End : AlignType.Start}
      >
        {children}
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
