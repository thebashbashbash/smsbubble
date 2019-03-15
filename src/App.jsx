import React, { Component } from 'react';
import './App.css';

import IMessage from './components/imessage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <IMessage></IMessage>
        </header>
      </div>
    );
  }
}

export default App;
