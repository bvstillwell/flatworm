import React from 'react';
import {connect} from 'react-redux'
import {Panel} from 'react-bootstrap'

import {selectAccount} from '../redux/actions.js'
import {EditableLabel} from './EditableLabel.js'



export const AccountsDraw = ({orgId, accounts, onAccountClick}) => {
    console.log(accounts)
    const render = accounts.map((account, step) => {
        console.log("ACCOUNT", account);
            return (
                <li className="list-group-item" key={account.code}>
                    <a href="#blam" onClick={() => onAccountClick(account.code)}>{account.code}</a> - <EditableLabel submit={console.log} text={account.name} />
                </li>
            );
        });
    return (
        <Panel header="Accounts" bsStyle="info">
            <ol className="list-group">{render}</ol>
        </Panel>
    )
}

const mapStateToProps = (state, ownProps) => {
    return ownProps
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