import React from 'react';
import { connect } from 'react-redux'
import store from '../index.js'
import {selectAccount} from '../redux/actions.js'


const Accounts = (accounts) => {
        console.log(accounts);
        const render = accounts.value.map((account, step) => {
            console.log(step)
                const desc = account.code + ' - ' + account.descr;
                return (
                    <li key={account.code}>
                        <a href="#blam" onClick={() => store.dispatch(selectAccount(account.code))}>{desc}</a>
                    </li>
                );
            });

    return (
        <div>Accounts
            <ol>{render}</ol>
        </div>
    )
}

const UserEntryPage = (props) => (
    <div>
        <Accounts value={props.value.accounts}></Accounts>
    </div>);

export default UserEntryPage