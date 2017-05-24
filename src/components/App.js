import React from 'react';
import logo from '../images/logo.svg';
import './App.css';

import {UserEntryPage} from './UserEntryPage.js'

export const App = (props) => (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="container">
          <UserEntryPage/>
        </div>
      </div>
  );
