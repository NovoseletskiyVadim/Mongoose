import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import './components/main/Main';
import AdressPanel from './components/adressPanel/AdressPanel';
import Main from './components/main/Main';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        
        <AdressPanel/>

        <Main/>
        
      </div>
    );
  }
}

export default App;
