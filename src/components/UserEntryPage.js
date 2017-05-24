import React from 'react';
import {connect} from 'react-redux'
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap'

import {AccountsList} from './Accounts.js'

const UserEntryPageDraw = ({organisation, address}) => (
    <Grid><Jumbotron>
                <h1>{organisation}</h1>
                <p>{address}</p>
            </Jumbotron>
        <Row>
        <Col sm={8} />
        <Col sm={4}>
            <AccountsList/>
        </Col>
    </Row></Grid>);

export const UserEntryPage = connect(
    (state) => state,
    null,
)(UserEntryPageDraw)