/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import Message, { SubjectType } from '../../../Message/Message';
import MessageContainer from '../../../MessageContainer/MessageContainer';
import MessageConversation from '../../../MessageConversation/MessageConversation';

const Bashar = SubjectType.You;
const Ole = SubjectType.Me;

const oleBirthdayPageDay1 = () => (
  <MessageConversation>
    <MessageContainer subject={Bashar}>
      <Message>Hej Habibi❤️!</Message>
      <Message>Du var sååå duktig som lyckades klura ut agave 🍯!</Message>
      <Message>Eftersom du var så duktig vill jag gärna ge dig en till ledtråd!🙂</Message>
    </MessageContainer>

    <MessageContainer subject={Ole}>
      <Message>AHHH!</Message>
      <Message>EEEEEEK!🤠</Message>
      <Message>vad vad vad?!</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>https://youtu.be/83PpryYHHeY</Message>
      <Message>☠️</Message>
    </MessageContainer>

    <MessageContainer subject={Ole}>
      <Message>men nei nei nei nei</Message>
      <Message>detta är ingen ledtrdå, är du gal?!?!👹</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>...</Message>
      <Message>🙃</Message>
    </MessageContainer>
  </MessageConversation>
);

export default oleBirthdayPageDay1;
