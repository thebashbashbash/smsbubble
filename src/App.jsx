/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import classes from './App.module.css';

import Bubble from './components/bubble/bubble';
import BubbleGroup from './components/bubbleGroup/bubbleGroup';

class App extends Component {
  render() {
    return (
      <div className={classes.chat}>
        {/* <div className={classes.messages}> */}
        <BubbleGroup color="blue">
          <Bubble />
          <Bubble />
        </BubbleGroup>
        {/* </div> */}
        {/* <div className={classes.messages}>
          <Bubble color="gray" />
          <Bubble color="gray" tail />
        </div> */}
      </div>
    );
  }
}

export default App;
