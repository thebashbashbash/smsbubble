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
      <Message>Bra jobbat igår! Du var nära, men inte riktigt helt rätt ute!🎁</Message>
      <Message>🤠</Message>
      <Message>Du får en ny chans idag!</Message>
    </MessageContainer>

    <MessageContainer subject={Ole}>
      <Message>HAI HAI HAI!</Message>
      <Message>ååååå var jag nära alltså?🤠</Message>
      <Message>hur nära? 🙈</Message>
      <Message>får jag fler ledtrådar idag? 🏝☠️</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Jaaa så klart du får fler ledtrådar idag, MEN, med en twist igen 🎢!</Message>
      <Message>
        Du får nu 2 frågor och för varje rätt fråga får du ställa en fråga till mig ... 🤓
      </Message>
    </MessageContainer>

    <MessageContainer subject={Ole}>
      <Message>EEEEEK!</Message>
      <Message>du är så morsom du! 🤩 kan jag ställa frågor som hjälper mig hitta gåvan?</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Jaa, helt riktig! MEN, det finns 2 regel dock 🚦!</Message>
      <Message>
        1 innan du börjar leta måste du har ställt alla dina frågor (1 fråga per rätt fråga du
        svarar på!)😇
      </Message>
      <Message>
        2 du får bara gissa/leta på en plats, om du inte lyckas så fortsätter vi imorgon!🗺
      </Message>
    </MessageContainer>

    <MessageContainer subject={Ole}>
      <Message>OK 😄</Message>
      <Message>jag är redo! 😆😆😆 låt skattjakten börja!🏝☠️</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>
        1️⃣: Det var en egenskap hos mig du tyckte var rolig / irriterande redan första
        telefonsamtalet, vad var det?
      </Message>
      <Message>
        2️⃣: När jag gjorde din alla hjärtans dag present gjorde jag illa mig, hur och var?
      </Message>
    </MessageContainer>

    <MessageContainer subject={Ole}>
      <Message>AHHH 😁 Ok får jag börja gissa?</Message>
      <Message>🤠</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>HAHA!🤪 Jaa, du får börja gissa nu!</Message>
      <Message>
        Glöm inte att jag älskar dig... om du inte lyckas får du vänta till imorgon!🔮
      </Message>
      <Message>❤️</Message>
    </MessageContainer>
  </MessageConversation>
);

export default oleBirthdayPageDay1;
