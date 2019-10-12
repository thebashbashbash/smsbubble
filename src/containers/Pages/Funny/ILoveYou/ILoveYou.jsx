/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router-dom';

import Message, { SubjectType } from '../../../Message/Message';
import MessageContainer from '../../../MessageContainer/MessageContainer';
import MessageConversation from '../../../MessageConversation/MessageConversation';


import Aux from '../../../../helpers/aux';

// eslint-disable-next-line prefer-destructuring
const Me = SubjectType.Me;
const Them = SubjectType.You;
const interactive = true;

ReactGA.initialize('UA-139986234-1');
ReactGA.pageview(window.location.pathname + window.location.search);

// eslint-disable-next-line react/prefer-stateless-function
export class ConversationResumePage extends Component {
  render() {
    return (
      <Aux>
        <div style={{ marginTop: '10px' }}>
          <MessageConversation interactive={interactive} autoscroll messageDelayMin={1500}>
            <MessageContainer subject={Them}>
              <Message>hey ... you still awake? I need to tell you something 🙂</Message>
              <Message>I love you</Message>
              <Message>🥺</Message>
            </MessageContainer>

            <MessageContainer subject={Me}>
              <Message>I need some space</Message>
            </MessageContainer>

            <MessageContainer subject={Them}>
              <Message>Ok ...</Message>
              <Message>I             love              you</Message>
            </MessageContainer>
          </MessageConversation>
        </div>
      </Aux>
    );
  }
}

export default withRouter(ConversationResumePage);
