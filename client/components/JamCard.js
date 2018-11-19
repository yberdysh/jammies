import React, { Component } from 'react';
import {connect} from 'react-redux'
// import { Card, Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'
// import {Grid, Col, Row} from 'react-bootstrap'

export class JamCard extends Component {

  render() {
    const { jam } = this.props
    return (
      <Card>
        <Link to={`/jams/${jam.id}`}>
          <Image src={jam.image} />
        </Link>
          <Card.Content>
            <Card.Header>{jam.name}</Card.Header>
            <Card.Meta>{`$${jam.price}`}</Card.Meta>
          </Card.Content>
        </Card>
    )
  }
}



