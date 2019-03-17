/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import classes from './App.module.css';

// import { TailTypes } from './components/bubble/bubble';
import Message, { SubjectTypes } from './components/message/message';
import MessageContainer from './components/messageContainer/messageContainer';

class App extends Component {
  render() {
    return (
      <div className={classes.Conversation}>
        {/* <MessageContainer subject={SubjectTypes.Me}>
          <Message>Hej!</Message>
          <Message>Vad heter du?</Message>
        </MessageContainer> */}
        <MessageContainer subject={SubjectTypes.You}>
          <Message>Vad heter du?</Message>
        </MessageContainer>
      </div>
    );
  }
}

export default App;
