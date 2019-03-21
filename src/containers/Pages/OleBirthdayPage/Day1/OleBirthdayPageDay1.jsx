/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import Message, { SubjectType } from '../../../Message/Message';
import MessageContainer from '../../../MessageContainer/MessageContainer';
import MessageConversation from '../../../MessageConversation/MessageConversation';

const Bashar = SubjectType.You;
const Ole = SubjectType.Me;

const oleBirthdayPageDay1 = () => (
  <MessageConversation>
    <MessageContainer subject={SubjectType.You}>
      <Message>Hej Habibi❤️!</Message>
      <Message>Nu undrar du säkert vad det här är? Inte sant?🤠</Message>
      <Message>Jo! Detta är en del av min födelsedagsgåva till dig!🎁🥮🥳</Message>
      <Message>Stort grattis i förskott! Din födelsedag är om några dagar!</Message>
    </MessageContainer>

    <MessageContainer subject={Ole}>
      <Message>HAJ HABIBI!😀</Message>
      <Message>Åhhh, såå fint! Vad jag har saknat dig så! 🙈</Message>
      <Message>Hur länge har du planerat det här?</Message>
      <Message>miiiip</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>
        Ett litet tag ... 😇 Jag har jobbat dag och natt för att hinna med detta ... men nu är det
        näästan klart!😀
      </Message>
      <Message>Nu börjar din skattjakt som ska leda till din födelsedsgåva! 🤩</Message>
    </MessageContainer>

    <MessageContainer subject={Ole}>
      <Message>😍😍😍</Message>
      <Message>Sa du skattjakt?! 🏝☠️</Message>
      <Message>EEEEEK!</Message>
      <Message>JAG ÄLSKAR SKATTJAKTER!</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Så bra!!😅Idag börjar vi ganska enkelt!</Message>
      <Message>
        För att klara av dagens etapp av skattjakten måste du svara rätt på följande frågor! 🤓
      </Message>
    </MessageContainer>

    <MessageContainer subject={Ole}>
      <Message>EEEEEK!</Message>
      <Message>😍😍😍</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>1️⃣: Vilket datum började vi snacka?</Message>
      <Message>2️⃣: Vem skrev först?</Message>
      <Message>3️⃣: Vem Woofa först?</Message>
      <Message>4️⃣: Ungefär hur många timmar varade vårt första telefonsamtal?</Message>
      <Message>
        5️⃣: Hur många dagar efter att vi började snacka bokade du din blogg biljett?
      </Message>
      <Message>
        6️⃣: Hur många dagar tog det innan du fick "cold feet" (alltså, hur många dagar efter att vi
        började prata)?
      </Message>
      <Message>
        7️⃣: På väg hem från tågstationen till min lägenhet, vad var det som hände? Vem stoppade oss
        och vad ville dom?
      </Message>
      <Message>8️⃣: Vilken var vår första måltid ihop?</Message>
      <Message>9️⃣: Vilken var vår första serie ihop?</Message>
      <Message>🔟: Du höll utkik vid ett tillfälle när vi var utomhus... Varför?</Message>
    </MessageContainer>

    <MessageContainer subject={Ole}>
      <Message>EEEEEK! FYFAN VAD KUL! Hur svarar jag?</Message>
      <Message>😍😍😍</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Haha! Enkelt, vänd dig mot Bashar och säg svaren så rättar han! 😅</Message>
      <Message>Jag älskar dig! Vi hörs imorgon igen!</Message>
      <Message>❤️</Message>
    </MessageContainer>
  </MessageConversation>
);

export default oleBirthdayPageDay1;
