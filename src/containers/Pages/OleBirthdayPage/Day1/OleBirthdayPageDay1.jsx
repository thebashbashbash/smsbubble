/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import Message, { SubjectType } from '../../../Message/Message';
import MessageContainer from '../../../MessageContainer/MessageContainer';
import MessageConversation from '../../../MessageConversation/MessageConversation';

const Bashar = SubjectType.You;
// const Ole = SubjectType.Me;

const oleBirthdayPageDay1 = () => (
  <MessageConversation>
    <MessageContainer subject={Bashar}>
      <Message>Hej Habibi❤️!</Message>
      <Message>
        Idag får du ännu en chans att hitta din present 🎁 en dag innann din faktiskt födelsedag!🤠
      </Message>
      <Message>Du var väldigt duktig igår habibimin! Bra jobbat! 🥳</Message>
    </MessageContainer>

    {/* <MessageContainer subject={Bashar}>
      <Message>Hej Habibi❤️!</Message>
      <Message>
        Idag får du ännu en chans att hitta din present 🎁 en dag innann din faktiskt födelsedag!🤠
      </Message>
      <Message>Du var väldigt duktig igår habibimin! Bra jobbat! 🥳</Message>
    </MessageContainer> */}
  </MessageConversation>
);

export default oleBirthdayPageDay1;
