/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import classes from './App.module.css';

import Bubble from './components/bubble/bubble';

class App extends Component {
  render() {
    return (
      <div className={classes.chat}>
        <div className={classes.messages}>
          <Bubble />
          <Bubble last />
        </div>
        <div className={classes.messages}>
          <Bubble gray />
          <Bubble gray last />
        </div>
      </div>
    );
  }
}

export default App;
