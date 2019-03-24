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
      <Message>
        Idag får du ännu en chans att hitta din present 🎁 en dag innann din faktiskt födelsedag!🤠
      </Message>
      <Message>Du var väldigt duktig igår habibimin! Bra jobbat! 🥳</Message>
    </MessageContainer>

    <MessageContainer subject={Ole}>
      <Message>Haaaaaaaaaai hajatihabibisonenmin!</Message>
      <Message>Idag har jag bestämt mig för ÄNTLIGEN att hitta presenten!🗺🏝 Game on!😁</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Jag tror på dig habibi! Du är såå flink ❤️</Message>
      <Message>
        Dagens utmaning består av tre frågor som du måste svara rätt på för att få en bra ledtråd!🙈
      </Message>
      <Message>
        Men om du svarar fel på en av frågorna får du ändå en en ledtråd ... bara inte lika bra 🤠!
      </Message>
      <Message>❤️</Message>
    </MessageContainer>

    <MessageContainer subject={Ole}>
      <Message>EEEEEEEK</Message>
      <Message>Okej, jag är redo habibi! Nu kör vi!</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Okej habibi! Dags för instruktioner!</Message>
      <Message>
        Läs frågorna, säg inte svaren högt! När du kan alla tre svar, skicka då ett sms med svaren
        till 0046703794381!📞
      </Message>
      <Message>Invänta därefter svar från numret! 😇</Message>
      <Message>❤️</Message>
    </MessageContainer>

    <MessageContainer subject={Ole}>
      <Message>😆😆😆</Message>
      <Message>Men vänta habibi är inte det ditt num-</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Okej nu kör vi haibibi!!!😘</Message>
      <Message>
        1️⃣: Vad heter platsen som Chris och Nicklas gick till utan mig i Sitges? 💧😈
      </Message>
      <Message>
        2️⃣: Vilken land kommer Misha eller Ana ifrån🇦🇸🇯🇲🇪🇷🇯🇪 (räcker med att du vet en av dom)?
      </Message>
      <Message>3️⃣: Vad för stort äventyr ska Chris göra i år?🗺</Message>
      <Message>❤️</Message>
    </MessageContainer>

    <MessageContainer subject={Ole}>
      <Message>miiiiiiiip</Message>
      <Message>😆😆😆</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Okej habibi! Jag älskar dig! Lycka till!</Message>
      <Message>Glöm inte att skicka frågorna till 0046703794381 och invänta instruktioner!</Message>
      <Message>❤️</Message>
    </MessageContainer>
  </MessageConversation>
);

export default oleBirthdayPageDay1;
