import React, { Component } from 'react';
import {connect} from 'react-redux'
// import { Card, Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'
// import {Grid, Col, Row} from 'react-bootstrap'

export class JamCard extends Component {

  render() {
    console.log("what is jam", jam)
    const { jam } = this.props
    return (
      <Link to={`/jams/${jam.id}`}>
        <Card>
          <Image src={jam.image} />
          <Card.Content>
            <Card.Header>Name</Card.Header>
            <Card.Description>Very cool city, the best</Card.Description>
          </Card.Content>
        </Card>
      </Link>
    )
  }
}



