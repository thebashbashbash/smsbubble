/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router-dom';

import ArrowBack from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import ForwardArrow from '@material-ui/icons/KeyboardArrowRightOutlined';

import Message, { SubjectType } from '../../Message/Message';
import MessageContainer from '../../MessageContainer/MessageContainer';
import MessageConversation from '../../MessageConversation/MessageConversation';

import BasharPic from '../../../assets/BasharPic.jpg';
import SofaTable from '../../../assets/sofatable.jpg';

import Aux from '../../../helpers/aux';

import classes from './SMSResumePage.module.css';


const Bashar = SubjectType.You;
const visitor = SubjectType.Me;
const interactive = false;

ReactGA.initialize('UA-139986234-1');
ReactGA.pageview(window.location.pathname + window.location.search);

// eslint-disable-next-line react/prefer-stateless-function
export class ConversationResumePage extends Component {
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
              href="/resume"
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
              <a style={{ color: 'black', textAlign: 'center', textDecoration: 'none' }} href="tel://0046703794381">
                <div style={{ display: 'inline-flex' }}>
                  <font
                    size="3"
                    style={{
                      display: 'flex',
                      alignSelf: 'baseline',
                    }}
                  >
Bashar Mengana

                  </font>
                  <font size="1px" color="gray" style={{ verticalAlign: 'top' }}>
                    {' '}
                    <ForwardArrow />
                  </font>
                </div>
              </a>
            </div>
          </div>
        ) : (null)}

        <div style={{ marginTop: location.pathname === '/smsresume' ? '100px' : '0px' }}>
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
            There's a lot to say here, but my three main interests are web development 🤓, all
            kinds of social activities and being creative!
              </Message>
            </MessageContainer>

            <MessageContainer subject={visitor}>
              <Message>Interesting! 🤠</Message>
              <Message>Please tell us about your experience in web development.</Message>
            </MessageContainer>

            <MessageContainer subject={Bashar}>
              <Message>
            I'm experienced with modern javascript/css/html coding (preferably react, but angular works too of course 😁) and CI/CD (gitlab-CI + serverless framework, cloudia.js or terraform).
              </Message>
            </MessageContainer>

            <MessageContainer subject={visitor}>
              <Message>Do you work both backend and frontend? 🤓</Message>
            </MessageContainer>

            <MessageContainer subject={Bashar}>
              <Message>
              Yes, I do both! I consider myself a fullstack web developer with a strong interest in DevOps and service design.
              </Message>
              <Message>
                  🐙
              </Message>
              <Message>
              For backend I've used node.js/express, and python with AWS services such as dynamoDB, lambda and RDS.
              </Message>
            </MessageContainer>

            <MessageContainer subject={visitor}>
              <Message>Sounds great, Bash! Are you willing to learn new technologies? 🙂</Message>
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
            </MessageContainer>

            <MessageContainer subject={visitor}>
              <Message>That's music to our ears! 🎻</Message>
              <Message>Great, Bash! Nice talking to you! 🤗</Message>
              <Message> ... oh, and you said you like being creative? </Message>
            </MessageContainer>

            <MessageContainer subject={Bashar}>
              <Message>Yeah! Here's a "plant stand" that I've built 👷🏻‍♂️</Message>
              <Message>{SofaTable}</Message>
              <Message>Check out my projects on basharmengana.com/projects</Message>
              <Message>... and here's an e-book tiny.cc/theoddfables that I've authored</Message>
              <Message>Please get in touch if you want to talk some more!</Message>
              <Message>contact@basharmengana.com</Message>
              <Message>linkedin.com/in/bashar-m</Message>
              <Message>basharmengana.com/resume</Message>
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

export default withRouter(ConversationResumePage);
