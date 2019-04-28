/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import Message, { SubjectType } from '../../Message/Message';
import MessageContainer from '../../MessageContainer/MessageContainer';
import MessageConversation from '../../MessageConversation/MessageConversation';

import BasharPic from '../../../assets/BasharPic.jpg';
import SofaTable from '../../../assets/sofatable.jpg';

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
      <Message>
        I'm experienced with modern JavaScript/CSS/HTML coding (React) and automation techniques
        (Gitlab CI + Serverless or AWS Codepipeline).
      </Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>Do you work both back end and front end? 🤓</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>
        Yes! For back end I've used Python and Node.JS and AWS services such as DynamoDB, Lambda,
        Streams, SNS and SQS.
      </Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>Sounds great Bash!</Message>
      <Message>Are you willing to learn new technologies? 🙂</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Absolutely! I'm not afraid of trying and learning new things 💪🏼</Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>Great!😀Tell us a bit about how you like to work.</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
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
      <Message>I'm a big fan of hypothesisdriven product development! 🧪👨🏻‍🔬</Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>Great Bash! Nice talking to you! 🤗</Message>
      <Message>... oh and by the way, you mentioned building stuff? </Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Yeah! Here's a plant sofa table 👷🏻‍♂️</Message>
      <Message>{SofaTable}</Message>
      <Message>Please get in touch if you wanna talk some more! My email is mengana@kth.se</Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>Sweet! Nice talking to you Bash! ✌🏼</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>✌🏼</Message>
    </MessageContainer>
  </MessageConversation>
);
export default resumePage;
