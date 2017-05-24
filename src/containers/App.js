import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import UserEntryPage from './UserEntryPage.js'

const App = (props) => (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <UserEntryPage value={props.value}></UserEntryPage>
      </div>
  );

export default App;
