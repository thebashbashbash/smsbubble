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
      <Message>Nu är det dags att du letar i Oles katakomber! ☠️</Message>
      <Message>Börja vid vår bibel och gå så djupt som du kan gå!</Message>
    </MessageContainer>

    <MessageContainer subject={Ole}>
      <Message>Hej, hej!</Message>
      <Message>Vad menar du? Ska jag gräva ett hål i min lägenhet?!🏔</Message>
      <Message>😲</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Ja men ungefär!😀</Message>
      <Message>Var kreativ! Vänd upp och ner på allt!</Message>
      <Message>☠️</Message>
    </MessageContainer>

    <MessageContainer subject={Ole}>
      <Message>Okej!!! Jag ska försöka 🤠</Message>
      <Message>Jag älskar dig habibi!</Message>
      <Message>❤️</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Jag älskar dig habibi!</Message>
      <Message>❤️</Message>
      <Message>Lycka till!!</Message>
    </MessageContainer>
  </MessageConversation>
);

export default oleBirthdayPageDay1;
