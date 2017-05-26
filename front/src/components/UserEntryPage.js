import React from 'react';
import {connect} from 'react-redux'
import {Grid, Row, Col, Jumbotron, Panel} from 'react-bootstrap'

import {AccountsList} from './Accounts.js'


const MultOrgPage = ({orgs}) =>{
    console.log(orgs)
    const draw = orgs.map(org => {
        return <OrgComponent key={org.id} org={org} />
    })
    return (
        <Panel>{draw}</Panel>
    )
}

const OrgComponent = ({org}) => (
    <Grid ><Jumbotron>
                <h1>{org.name}</h1>
                <p>{org.address}</p>
            </Jumbotron>
        <Row>
        <Col sm={8} />
        <Col sm={4}>
              <AccountsList orgId={org.id} accounts={org.accounts}/>
        </Col>
    </Row></Grid>);

export const UserEntryPage = connect(
    (state) => ({orgs: state.orgs}),
    null,
)(MultOrgPage)