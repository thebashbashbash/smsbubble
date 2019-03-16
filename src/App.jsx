/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import classes from './App.module.css';

import Bubble from './components/bubble/bubble';
import BubbleContainer from './components/bubbleContainer/bubbleContainer';

class App extends Component {
  render() {
    return (
      <div className={classes.Conversation}>
        <BubbleContainer align="end" color="blue">
          <Bubble />
          <Bubble />
        </BubbleContainer>
        <BubbleContainer align="start" color="gray">
          <Bubble />
          <Bubble />
        </BubbleContainer>
      </div>
    );
  }
}

export default App;
