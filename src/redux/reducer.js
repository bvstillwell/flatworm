import { ADD_ACCOUNT, SELECT_ACCOUNT } from './actions.js'
import {initialState} from './initialise.js';


export const accounts = (state=initialState, action) => {
    console.log("REDUCE", state, action)
    switch (action.type) {
        case ADD_ACCOUNT:
            return Object.assign({}, state, {
                accounts: state.accounts.concat({descr: action.descr, code: action.code})
            });

        case SELECT_ACCOUNT:
            return Object.assign({}, state, {
                accounts: state.accounts.filter((item) => item.code !== action.code)
            });
        default:
            return state;
    }
}

export default accounts;