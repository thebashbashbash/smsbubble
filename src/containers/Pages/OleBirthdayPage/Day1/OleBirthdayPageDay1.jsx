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
      <Message>Bra jobbat med gårdagens quiz🏅! Bara två fel!!</Message>
    </MessageContainer>

    <MessageContainer subject={Ole}>
      <Message>HAJ IGEN HABIBI!</Message>
      <Message>Taaaaack 😅!</Message>
      <Message>Egentligen hade jag bara ett fel, men men 🤓</Message>
      <Message>Blir det fler frågor idag?🤠</Message>
      <Message>miiiip!</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>
        Jaaa men det är så klart habibi! Det blir fler frågor, MEN, med en twist! 🎢
      </Message>
      <Message>
        Du kan redan nu få din gåva OM du lyckas gissa rätt på var den finns🎁 ... MEN, du får en
        chans att gissa och jag säger till om svaret är rätt! 🔮
      </Message>
    </MessageContainer>

    <MessageContainer subject={Ole}>
      <Message>😍😍😍</Message>
      <Message>EEEEEK!</Message>
      <Message>Menar du att jag kan få min gåva redan idag?! 🤩</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Jaa, riktig! 🇳🇴</Message>
      <Message>Om du gissar rätt är din present din, redan idag!</Message>
      <Message>Redo??!</Message>
    </MessageContainer>

    <MessageContainer subject={Ole}>
      <Message>EEEEEK!</Message>
      <Message>JAAA!</Message>
      <Message>Jag är reda! Give it to me, låt skattjakten börja!🏝☠️</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>1️⃣: Du tittar ut genom den franska balkongen i mörkret, på snön!</Message>
      <Message>2️⃣: Du tittar stolt mot mig med din kreation!</Message>
      <Message>3️⃣: En vision som påminner dig om en kärlek som blommar!</Message>
      <Message>4️⃣: Du fångar mig på språng!</Message>
    </MessageContainer>

    <MessageContainer subject={Ole}>
      <Message>MEN VA? Vad svårt!🤓</Message>
      <Message>😓</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>
        HAHA!🤪 Det finns inga svar på varje enskild fråga, men tillsammans är dom en ledtråd som
        talar om var gåvan finns!🏝
      </Message>
      <Message>
        Jag älskar dig, men du får bara en chans att gissa på vara gåvan finns 😅... om du inte
        lyckas får du vänta till imorgon!🔮
      </Message>
      <Message>❤️</Message>
    </MessageContainer>
  </MessageConversation>
);

export default oleBirthdayPageDay1;
