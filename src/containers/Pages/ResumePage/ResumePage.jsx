/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import Message, { SubjectType } from '../../Message/Message';
import MessageContainer from '../../MessageContainer/MessageContainer';
import MessageConversation from '../../MessageConversation/MessageConversation';

const resumePage = () => (
  <MessageConversation>
    <MessageContainer subject={SubjectType.Me}>
      <Message>Hello!</Message>
      <Message>You're Bashar right?🤠</Message>
    </MessageContainer>
    <MessageContainer subject={SubjectType.You}>
      <Message>Yeah, that's me! My friends call me Bash 😀!</Message>
      <Message>
        I'm not done with this page yet, so please check back leter or send me a message at
        mengana@kth.se 📬️!
      </Message>
    </MessageContainer>
  </MessageConversation>
);
export default resumePage;
