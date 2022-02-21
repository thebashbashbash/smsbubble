/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from "react";
import ReactGA from "react-ga";
import { withRouter } from "react-router-dom";

import ArrowBack from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import ForwardArrow from "@material-ui/icons/KeyboardArrowRightOutlined";

import Message, { SubjectType } from "../../Message/Message";
import MessageContainer from "../../MessageContainer/MessageContainer";
import MessageConversation from "../../MessageConversation/MessageConversation";

import BasharPic from "../../../assets/BasharPic.jpg";
import SofaTable from "../../../assets/sofatable.jpg";

import Aux from "../../../helpers/aux";

import classes from "./SMSResumePage.module.css";

const Bashar = SubjectType.You;
const visitor = SubjectType.Me;
const interactive = true;

ReactGA.initialize("UA-139986234-1");
ReactGA.pageview(window.location.pathname + window.location.search);

// eslint-disable-next-line react/prefer-stateless-function
export class ConversationResumePage extends Component {
  render() {
    const { location } = this.props;
    return (
      <Aux>
        {location.pathname === "/smsresume" ? (
          <div
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              right: "0",
              display: "flex",
              zIndex: 1,
              backgroundColor: "rgba(245, 245, 245, 0.97)",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <IconButton
              href="/resume"
              style={{
                color: "#0085D1",
                height: "fit-content",
                width: "fit-content",
                alignSelf: "flex-end",
              }}
              aria-label="back_arrow"
            >
              <ArrowBack />
            </IconButton>
            <div
              style={{
                top: "0",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                zIndex: 2,
                alignSelf: "flex-end",
                alignItems: "center",
                width: "100%",
              }}
            >
              <img
                className={classes.CircleImage}
                src={BasharPic}
                alt="avatar"
              />
              <a
                style={{
                  color: "black",
                  textAlign: "center",
                  textDecoration: "none",
                }}
                href="mailto:contact@basharmengana.com"
              >
                <div style={{ display: "inline-flex" }}>
                  <font
                    size="3"
                    style={{
                      display: "flex",
                      alignSelf: "baseline",
                    }}
                  >
                    Bashar Mengana
                  </font>
                  <font
                    size="1px"
                    color="gray"
                    style={{ verticalAlign: "top" }}
                  >
                    {" "}
                    <ForwardArrow />
                  </font>
                </div>
              </a>
            </div>
          </div>
        ) : null}

        <div
          style={{
            marginTop: location.pathname === "/smsresume" ? "100px" : "0px",
          }}
        >
          <MessageConversation interactive={interactive} autoscroll>
            <MessageContainer subject={visitor}>
              <Message>Hey!</Message>
              <Message>Bashar Mengana, right? 🤠</Message>
            </MessageContainer>

            <MessageContainer subject={Bashar}>
              <Message>Howdy! Yeah, that's me! </Message>
              <Message>{BasharPic}</Message>
              <Message>My friends call me Bash! 😊</Message>
            </MessageContainer>

            <MessageContainer subject={visitor}>
              <Message>
                Nice to meet you, Bash! Tell us a bit about yourself?
              </Message>
              <Message>🙂🎤</Message>
            </MessageContainer>

            <MessageContainer subject={Bashar}>
              <Message>
                There's a lot to say, but my three main interests are coding 🤓,
                social and creative activities!
              </Message>
            </MessageContainer>

            <MessageContainer subject={visitor}>
              <Message>Interesting, Bash! 🤠</Message>
              <Message>Please tell us about your experience in coding.</Message>
            </MessageContainer>

            <MessageContainer subject={Bashar}>
              <Message>Sure!</Message>
              <Message>
                Front end wise I have years of experience in React in JS/TS. I
                am experienced in building components using hooks, local and
                global state, testing them using JEST or with visual testing.
              </Message>
            </MessageContainer>

            <MessageContainer subject={visitor}>
              <Message>Do you work in backend too? 🤓</Message>
            </MessageContainer>

            <MessageContainer subject={Bashar}>
              <Message>Oh yeah!</Message>
              <Message>🐙</Message>
              <Message>
                Yes, I do both REST (NodeJS Express) and GraphQL (ApolloServer
                with ApolloClient) at my current job!
              </Message>
              <Message>
                I consider myself a fullstack developer with an interest in
                DevOps and smooth user experiences!
              </Message>

              <Message>
                I also know how to debug and solve problems when something goes
                wrong! 🕵🏻‍♂️
              </Message>
            </MessageContainer>

            <MessageContainer subject={visitor}>
              <Message>That sounds great, Bash! 😜</Message>
              <Message>
                Lastly, tell us a bit about how you like to work?
              </Message>
            </MessageContainer>

            <MessageContainer subject={Bashar}>
              <Message>
                I would like to work in an agile and autonomous team, preferably
                in a team that focuses on the user's experience of the product
                or service.
              </Message>
              <Message>
                However, more importantly, I value good team vibes and team
                sprit! 🤙
              </Message>
              <Message>👩🏻‍🔬👨🏻‍🔧👨🏼‍🚀👩🏽‍🎨</Message>
            </MessageContainer>

            <MessageContainer subject={visitor}>
              <Message>That's music to our ears! 🎻</Message>
              <Message>Alright, Bash! Nice talking to you! 🤗</Message>
              <Message>
                ... oh, and you said you like being creative? 🙊
              </Message>
            </MessageContainer>

            <MessageContainer subject={Bashar}>
              <Message>Yeah! Here's a "plant stand" I've built 👷🏻‍♂️</Message>
              <Message>{SofaTable}</Message>
              <Message>
                And check out my projects at basharmengana.com/projects
              </Message>
              <Message>
                ... and here's an e-book tiny.cc/theoddfables that I've authored
              </Message>
              <Message>Please get in touch if you want to talk more!</Message>
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
