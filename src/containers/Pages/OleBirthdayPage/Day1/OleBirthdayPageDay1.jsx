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
      <Message>Det finns två sätt att hitta mig!🎢</Message>
    </MessageContainer>

    <MessageContainer subject={Ole}>
      <Message>???</Message>
      <Message>🤠</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>
        Du får en chans till idag (men bara en!🤠) ... leta där du dricker mig varje dag!🏝☠️
      </Message>
      <Message>❤️</Message>
    </MessageContainer>
  </MessageConversation>
);

export default oleBirthdayPageDay1;
