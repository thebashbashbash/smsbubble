/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.module.css';

import Message, { SubjectType } from './containers/Message/Message';
import MessageContainer from './containers/MessageContainer/MessageContainer';
import MessageConversation from './containers/MessageConversation/MessageConversation';

class App extends Component {
  render() {
    return (
      <MessageConversation>
        <MessageContainer subject={SubjectType.Me}>
          <Message>Vad heter du? Jag heter Bashar!</Message>
          <Message>Förresten, jag älskar dig!</Message>
          <Message>Förresten, jag älskar dig!</Message>
        </MessageContainer>
        <MessageContainer subject={SubjectType.You}>
          <Message>Vad heter du? Jag heter Bashar!</Message>
          <Message>Förresten, jag älskar dig!</Message>
          <Message>Vad heter du? Jag heter Bashar!</Message>
          <Message>Förresten, jag älskar dig!</Message>
        </MessageContainer>
        <MessageContainer subject={SubjectType.Me}>
          <Message>Vad heter du? Jag heter Bashar!</Message>
          <Message>Förresten, jag älskar dig!</Message>
          <Message>Vad heter du? Jag heter Bashar!</Message>
          <Message>Förresten, jag älskar dig!</Message>
          <Message>Vad heter du? Jag heter Bashar!</Message>
          <Message>Förresten, jag älskar dig!</Message>
        </MessageContainer>
        <MessageContainer subject={SubjectType.You}>
          <Message>Vad heter du? Jag heter Bashar!</Message>
          <Message>Förresten, jag älskar dig!</Message>
        </MessageContainer>
      </MessageConversation>
    );
  }
}

export default App;
