import React from 'react';
import {connect} from 'react-redux'
import {Panel} from 'react-bootstrap'

import {selectAccount} from '../redux/actions.js'



export const AccountsDraw = ({accounts, onAccountClick}) => {
    const render = accounts.map((account, step) => {
            const desc = account.code + ' - ' + account.descr;
            return (
                <li className="list-group-item" key={account.code}>
                    <a href="#blam" onClick={onAccountClick}>{desc}</a>
                </li>
            );
        });
    return (
        <Panel header="Accounts" bsStyle="info">
            <ol className="list-group">{render}</ol>
        </Panel>
    )
}

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAccountClick: id => {
            dispatch(selectAccount(id))
        }
    }
}

export const AccountsList = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AccountsDraw)