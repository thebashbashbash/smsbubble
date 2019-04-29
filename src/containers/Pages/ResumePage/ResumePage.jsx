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
      <Message>Hey there! Yeah, that's me! </Message>
      <Message>{BasharPic}</Message>
      <Message>My friends call me Bash, though 😊</Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>Nice to meet you, Bash! Tell us a bit about yourself?</Message>
      <Message>🙂🎤</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>
        There's a lot to say here, but my three main interests are software development 🤓, all
        kinds of social activities and building stuff!
      </Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>Interesting! 🤠</Message>
      <Message>Please tell us about your experience in software development.</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>
        I'm experienced with modern JavaScript/CSS/HTML coding (React) and automation techniques
        (Gitlab CI + Serverless or AWS CodePipeline).
      </Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>Do you work both back end and front end? 🤓</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>
        I do! For back end I've used Python and Java with AWS services such as DynamoDB, Lambda,
        Streams, SNS and SQS.
      </Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>Sounds great, Bash!</Message>
      <Message>Are you willing to learn new technologies? 🙂</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Absolutely! I'm not afraid of trying and learning new things 💪🏼</Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>Great! 😜 And lastly, tell us a bit about how you like to work.</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>
        I'm most comfortable working in an team environment with the customer in the loop, and, I
        like to challenge both myself and the team to improve! 🏆
      </Message>
      <Message>👩🏻‍🔬👨🏻‍🔧👨🏼‍🚀👩🏽‍🎨</Message>
      <Message>Successful teams are vital!</Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>That's music to our ears! 🎻</Message>
      <Message>Great, Bash! Nice talking to you! 🤗</Message>
      <Message> ... oh, and by the way, you mentioned building stuff? </Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Yeah! Here's my "plant stand" 👷🏻‍♂️</Message>
      <Message>{SofaTable}</Message>
      <Message>Please get in touch if you want to talk some more!</Message>
      <Message>mengana@kth.se</Message>
      <Message>linkedin.com/in/bashar-m</Message>
    </MessageContainer>

    <MessageContainer subject={vistor}>
      <Message>Awesome! Talk to you soon, Bash! ✌🏼</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>✌🏼</Message>
    </MessageContainer>
  </MessageConversation>
);
export default resumePage;
