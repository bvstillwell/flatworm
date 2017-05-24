import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './containers/index.css';
import registerServiceWorker from './registerServiceWorker';
import accounts from './redux/reducer.js'
import App from './containers/App';
import initialise from './redux/initialise.js';

let store = createStore(accounts);
initialise(store);

render(
    <App value={store.getState()}/>, document.getElementById('root')
)

export default store;