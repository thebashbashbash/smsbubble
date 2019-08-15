/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router-dom';

import ArrowBack from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';

import Message, { SubjectType } from '../../Message/Message';
import MessageContainer from '../../MessageContainer/MessageContainer';
import MessageConversation from '../../MessageConversation/MessageConversation';

import BasharPic from '../../../assets/BasharPic.jpg';
import SofaTable from '../../../assets/sofatable.jpg';

import Aux from '../../../helpers/aux';

import classes from './FunResumePage.module.css';


const Bashar = SubjectType.You;
const visitor = SubjectType.Me;
const interactive = true;

ReactGA.initialize('UA-139986234-1');
ReactGA.pageview(window.location.pathname + window.location.search);

// eslint-disable-next-line react/prefer-stateless-function
export class FunResumePage extends Component {
  render() {
    const { location } = this.props;
    return (
      <Aux>
        {location.pathname === '/smsresume' ? (
          <div style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            display: 'flex',
            zIndex: 1,
            backgroundColor: 'rgba(245, 245, 245, 0.97)',
            justifyContent: 'space-between',
            padding: '10px',
          }}
          >
            <IconButton
              href="https://basharmengana.com/resume"
              style={{
                color: '#0085D1',
                height: 'fit-content',
                width: 'fit-content',
                alignSelf: 'flex-end',
              }}
              aria-label="back_arrow"
            >
              <ArrowBack />
            </IconButton>
            <div style={{
              top: '0',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 2,
              alignSelf: 'flex-end',
              alignItems: 'center',
              width: '100%',
            }}
            >
              <img className={classes.CircleImage} src={BasharPic} alt="avatar" />
              <font size="2">Bashar Mengana</font>
            </div>
          </div>
        ) : (null)}

        <div style={{ marginTop: location.pathname === '/smsresume' ? '90px' : '0px' }}>
          <MessageConversation interactive={interactive} autoscroll>
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
        </div>
      </Aux>
    );
  }
}

export default withRouter(FunResumePage);
