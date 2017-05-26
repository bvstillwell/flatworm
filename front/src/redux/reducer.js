import { INIT_ORGS } from './actions.js'
import {initialState} from './initialise.js';


export const accounts = (state=initialState, action) => {
    console.log("REDUCE", state, action)
    switch (action.type) {
        // case ADD_ACCOUNT:
        //     return Object.assign({}, state, {
        //         accounts: state.accounts.concat({descr: action.descr, code: action.code})
        //     });

        // case SELECT_ACCOUNT:
        //     return Object.assign({}, state, {
        //         accounts: state.accounts.filter((item) => item.code !== action.code)
        //     });
        case INIT_ORGS:
            return Object.assign({}, state, {
                orgs: action.orgs
            });
        default:
            return state;
    }
}

export default accounts;