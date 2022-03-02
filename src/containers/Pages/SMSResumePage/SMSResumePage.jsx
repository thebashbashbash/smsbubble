/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from "react";
import ReactGA from "react-ga";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

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
      <div>
        <Helmet>
          <title>Bashar Mengana</title>
          <meta
            name="description"
            content="Do you want to get to know me - Bashar Mengana - better? Check out this website!"
          />
          <meta name="theme-color" content="#008f68" />
          <meta property="og:image" content="basharmengana.com/preview.png" />
          <meta property="og:title" content="Bashar Mengana" />
          <meta
            property="og:description"
            content="Do you want to get to know me - Bashar Mengana - better? Check out this website!"
          />
        </Helmet>

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

          <div>
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
                  Nice to meet you, Bash! Tell us about yourself?
                </Message>
                <Message>🙂🎤</Message>
              </MessageContainer>

              <MessageContainer subject={Bashar}>
                <Message>
                  My three main interests are coding 🤓, social and creative
                  activities!
                </Message>
              </MessageContainer>

              <MessageContainer subject={visitor}>
                <Message>Interesting, Bash! 🤠</Message>
                <Message>Please tell us about your coding experience</Message>
              </MessageContainer>

              <MessageContainer subject={Bashar}>
                <Message>Sure!</Message>
                <Message>
                  Front end wise I have years of experience in React, React
                  Native in JS/TS
                </Message>
                <Message>Hooks 🪝, components 🧩, Redux 🌍</Message>
                <Message>
                  React Testing Library / JEST 🧪, Storybook 📕, automated
                  visual testing 🤖🔬
                </Message>
                <Message>I could go on and on ... please stop me 😄!</Message>
              </MessageContainer>

              <MessageContainer subject={visitor}>
                <Message>Haha!</Message>
                <Message>Do you also work in backend? 🤓</Message>
              </MessageContainer>

              <MessageContainer subject={Bashar}>
                <Message>I do</Message>
                <Message>🐙</Message>
                <Message>
                  Both REST and GraphQL using Postgres DB or AWS DynamoDB!
                </Message>
                <Message>
                  I'm fullstack developer with an interest in smooth user
                  experiences!
                </Message>
                <Message>🧼</Message>
                <Message>
                  I also debug and solve problems when something goes wrong! 🕵🏻‍♂️
                </Message>
                <Message>
                  Oh, I also do non-coding work, like organizing team collabs,
                  grooming tickets 🪒, mentoring 🧑🏻‍🏫!
                </Message>
              </MessageContainer>

              <MessageContainer subject={visitor}>
                <Message>Sounds great, Bash! 😜</Message>
                <Message>
                  Lastly, tell us a bit about how you'd like to work?
                </Message>
              </MessageContainer>

              <MessageContainer subject={Bashar}>
                <Message>In an agile and autonomous team</Message>
                <Message>
                  Preferably in a team that focuses on the user's experience
                </Message>
                <Message>
                  However, and more importantly, I value good team vibes and
                  team sprit! 🤙
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
                  Check out my other projects at basharmengana.com/projects
                </Message>
                <Message>
                  My art page on Instagram tiny.cc/callmesourcandy
                </Message>
                <Message>
                  Here's an e-book tiny.cc/the-odd-fables that I've authored
                </Message>
                <Message>Please get in touch if you want to talk more!</Message>
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
      </div>
    );
  }
}

export default withRouter(ConversationResumePage);
