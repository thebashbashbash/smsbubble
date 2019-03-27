/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import Message, { SubjectType } from '../../Message/Message';
import MessageContainer from '../../MessageContainer/MessageContainer';
import MessageConversation from '../../MessageConversation/MessageConversation';

const Bashar = SubjectType.You;
const vistor = SubjectType.Me;

const resumePage = () => (
  <MessageConversation>
    <MessageContainer subject={vistor}>
      <Message>Hello!</Message>
      <Message>Bashar Mengana, right? 🤠</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Yeah, that's me! My friends call me Bash though 😀</Message>
      <Message>
        I'm not done with this page yet, so please check back later or send me a message at
        mengana@kth.se 📬️
      </Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>Nice, sounds good! See you later then Bash 🙂</Message>
    </MessageContainer>
  </MessageConversation>
);
export default resumePage;
