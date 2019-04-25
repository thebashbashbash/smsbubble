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
      <Message>Hey there!</Message>
      <Message>Yeah, that's me! My friends call me Bash though 😊</Message>
      <Message>{BasharPic}</Message>
      <Message> that's a recent photo of me from last summer! ☀️</Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>Nice to meet you Bash! Tell us a bit about yourself?</Message>
      <Message>🙂🎤</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>
        There's alot to say here, but my three main interests are software development 🤓, all kind
        of social acitivites and building stuff!
      </Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>Interesting! 🤠</Message>
      <Message>Please tell us about your experience in software development.</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Absolutely! 😊</Message>
      <Message>
        I'm experienced with modern JavaScript/CSS/HTML coding (React), testing, debugging and
        automation techniques (Gitlab CI + Serverless or AWS Codepipeline).
      </Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>Do you work both back end and front end? 🤓</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Yes!</Message>
      <Message>
        For back end I've used Python and Node.JS and AWS services such as DynamoDB, Lambda,
        Streams, SNS, SQS.
      </Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>Sounds great Bash!</Message>
      <Message>Are you willing to learn new techs?🙂</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Absolutely! I'm not afraid of trying and learning new technologies 💪🏼</Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>Great!😀Tell us a bit about how you like to work.</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Alright!</Message>
      <Message>
        I'm most comfortable working in an agile team environment, and like to challange both myself
        and the team to improve our way of working!🏆
      </Message>
      <Message>It's all about sucessfull teams!</Message>
      <Message>👩🏻‍🔬👨🏻‍🔧👨🏼‍🚀👩🏽‍🎨</Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>That music to our ears! 🎻</Message>
      <Message>Have you heard of the build-measure-learn loop?</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Yeah, I have!</Message>
      <Message> bla bla bla </Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>Great Bash!</Message>
      <Message>It was nice talking to you! </Message>
    </MessageContainer>
  </MessageConversation>
);
export default resumePage;
