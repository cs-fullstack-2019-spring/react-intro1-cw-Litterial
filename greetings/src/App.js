import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import SayHello from './SayHello';
import SayHowdy from './SayHowdy'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            {/* name of the classes that's imported*/}
            <SayHello/>
          <SayHowdy/>
        </header>

      </div>
    );
  }
}

export default App;
