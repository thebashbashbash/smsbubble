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
      <Message>Hi!</Message>
      <Message>Bashar Mengana, right? 🤠</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>yeah, that's me! my friends call me Bash though 😀</Message>
      <Message>what would you like to know about me? ask me anything!</Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>Tell us some more about yourself 🙂. What do you like coding, for instance?</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>I ❤️ web development, and to bo honest, I enjoy both front- and back end!</Message>
      <Message>
        additionally, recent year, I've ventured into the real of a devops engineer 👨🏻‍🔧 and ...
      </Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>and?</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>
        well, and honestly, writing infrastructure code is actually fun, and it helps me understand
        the entire cycle of a CI/CD pipeline 🛠👷🏻‍
      </Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>So, you're a full stack web developer? 😀</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>yup 🤩</Message>
      <Message>that's what I wanna be! </Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>That's great!</Message>
      <Message>That's what we are looking for. 😉</Message>
      <Message>Tell us more about the tech stack you're currenrlty working with!</Message>
      <Message>Please be specific!</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>sure!</Message>
      <Message>I ... bla bla bla </Message>
    </MessageContainer>
  </MessageConversation>
);
export default resumePage;
