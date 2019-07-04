import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import './components/main/Main';
import AdressPanel from './components/adressPanel/AdressPanel';
import LogoPanel  from './components/logoPanel/logoPanel';
import LendingMenu from './components/_menu/Menu';
import MobileMenu from './components/_mobileMenu/MobileMenu';
class App extends Component {
  render() {
    return (
      <div className="App container">
       
        <AdressPanel/>

        <MobileMenu/>

        <LogoPanel/>

        <LendingMenu/>




        
      </div>
    );
  }
}

export default App;
