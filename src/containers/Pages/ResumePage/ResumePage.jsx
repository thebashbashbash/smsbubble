/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import Message, { SubjectType } from '../../Message/Message';
import MessageContainer from '../../MessageContainer/MessageContainer';
import MessageConversation from '../../MessageConversation/MessageConversation';

import BasharPic from '../../../assets/BasharPic.jpg';

const Bashar = SubjectType.You;
const vistor = SubjectType.Me;
const interactive = true;

const resumePage = () => (
  <MessageConversation interactive={interactive}>
    <MessageContainer subject={vistor}>
      <Message>Hey!</Message>
      <Message>Bashar Mengana, right? 🤠</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Hey! Yeah, thats me, but friends call me Bash! </Message>
      <Message>{BasharPic}</Message>
      <Message> ... and thats a recent picture of me!</Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>Nice to meet you Bash! Tell us about yourself? 🙂</Message>
      <Message>🎤</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>
        There's alot to say, but my main interest are software development 🤓, creating artwork and
        social acitivites 🦸🏻‍♂️!
      </Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>To be continued ...</Message>
    </MessageContainer>
    {/*
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
    </MessageContainer> */}
  </MessageConversation>
);
export default resumePage;
