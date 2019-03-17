/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import classes from './App.module.css';

import Bubble from './components/bubble/bubble';
import BubbleContainer from './components/bubbleContainer/bubbleContainer';
import LoadingIndicator from './components/loadingIndicator/loadingIndicator';

class App extends Component {
  render() {
    return (
      <div className={classes.Conversation}>
        <BubbleContainer align="start" color="blue">
          <Bubble trail="trailTail">
            <LoadingIndicator />
          </Bubble>
        </BubbleContainer>
      </div>
    );
  }
}

export default App;
