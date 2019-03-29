import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';

import BankAccount from './BankAccount'
var customer_name='Doug Funny';
var balance='$1337';
// className is used to access the classes
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            {/* name of the class that's imported*/}
            {/* customer name and balance props are grabbed*/}
            <BankAccount
              customer_name={customer_name} balance={balance}/>
        </header>
      </div>
    );
  }
}

export default App;
