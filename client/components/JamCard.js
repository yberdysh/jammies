import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'
import {fetchSingleJam} from '../store'
// import {Grid, Col, Row} from 'react-bootstrap'

const JamCard = ({getSingleJam, jam}) => {
    return (
      <Card>
        <Link to={`/jams/${jam.id}`}>
          <Image onClick={() => getSingleJam(jam.id)} src={jam.image} />
        </Link>
          <Card.Content>
            <Card.Header>{jam.name}</Card.Header>
            <Card.Meta>{`$${jam.price}`}</Card.Meta>
          </Card.Content>
        </Card>
    )
  }

const mapDispatchToProps = (dispatch) => ({
  getSingleJam: (jamId) => dispatch(fetchSingleJam(jamId))
})

export default connect(null, mapDispatchToProps)(JamCard)
