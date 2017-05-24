import {ADD_ACCOUNT} from './actions.js'

const initialise = (store) => {
    store.dispatch({type: ADD_ACCOUNT, code: 123, descr: "one two three"});
    store.dispatch({type: ADD_ACCOUNT, code: 456, descr: "four five six"});
}

export default initialise;