import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import accounts from './redux/reducer.js'
import {App} from './components/App'
import {loadInitial} from './redux/initialise.js'

let store = createStore(accounts);
loadInitial(store.dispatch);

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
)