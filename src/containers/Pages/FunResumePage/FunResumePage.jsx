/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import ReactGA from 'react-ga';

import Message, { SubjectType } from '../../Message/Message';
import MessageContainer from '../../MessageContainer/MessageContainer';
import MessageConversation from '../../MessageConversation/MessageConversation';

import BasharPic from '../../../assets/BasharPic.jpg';
import SofaTable from '../../../assets/sofatable.jpg';

const Bashar = SubjectType.You;
const visitor = SubjectType.Me;
const interactive = true;

ReactGA.initialize('UA-139986234-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const funResumePage = () => (
  <MessageConversation interactive={interactive}>
    <MessageContainer subject={visitor}>
      <Message>Hey!</Message>
      <Message>Bashar Mengana, right? 🤠</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Hey there! Yeah, that's me! </Message>
      <Message>{BasharPic}</Message>
      <Message>My friends call me Bash, though 😊</Message>
    </MessageContainer>

    <MessageContainer subject={visitor}>
      <Message>Nice to meet you, Bash! Tell us a bit about yourself?</Message>
      <Message>🙂🎤</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>
        There's a lot to say here, but my three main interests are software development 🤓, all
        kinds of social activities and being creative!
      </Message>
    </MessageContainer>

    <MessageContainer subject={visitor}>
      <Message>Interesting! 🤠</Message>
      <Message>Please tell us about your experience in software development.</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>
        I'm experienced with modern JavaScript/CSS/HTML coding (React) and automation techniques
        (Gitlab CI + Serverless or AWS CodePipeline).
      </Message>
    </MessageContainer>

    <MessageContainer subject={visitor}>
      <Message>Do you work both back end and front end? 🤓</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>
        I do! For back end I've used Python and Java with AWS services such as DynamoDB and Lambda.
      </Message>
    </MessageContainer>

    <MessageContainer subject={visitor}>
      <Message>Sounds great, Bash!</Message>
      <Message>Are you willing to learn new technologies? 🙂</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Absolutely! I'm not afraid of trying and learning new things 💪🏼</Message>
    </MessageContainer>

    <MessageContainer subject={visitor}>
      <Message>Great! 😜 And lastly, tell us a bit about how you like to work.</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>
        I'm most comfortable working in an agile team with the customer in the loop, and, I like to
        challenge both myself and the team to improve! 🏆
      </Message>
      <Message>👩🏻‍🔬👨🏻‍🔧👨🏼‍🚀👩🏽‍🎨</Message>
      <Message>Team success > individual success!</Message>
    </MessageContainer>

    <MessageContainer subject={visitor}>
      <Message>That's music to our ears! 🎻</Message>
      <Message>Great, Bash! Nice talking to you! 🤗</Message>
      <Message> ... oh, and you said you like being creative? </Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>Yeah! Here's a "plant stand" that I've built 👷🏻‍♂️</Message>
      <Message>{SofaTable}</Message>
      <Message>... and here's an e-book http://tiny.cc/theoddfables that I've authored </Message>
      <Message>Please get in touch if you want to talk some more!</Message>
      <Message>contact@basharmengana.com</Message>
      <Message>linkedin.com/in/bashar-m</Message>
    </MessageContainer>

    <MessageContainer subject={visitor}>
      <Message>Awesome! Talk to you soon, Bash! ✌🏼</Message>
    </MessageContainer>

    <MessageContainer subject={Bashar}>
      <Message>✌🏼</Message>
    </MessageContainer>
  </MessageConversation>
);
export default funResumePage;
