import React, { Component } from 'react';
import {connect} from 'react-redux'
import {countStars} from '../utilFuncs/starCalc'
import {Link} from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'
import {times} from 'lodash';

export class JamCard extends Component {

  render() {
    const { jam } = this.props
    const starsArray = jam.numStars && countStars(jam.numStars)
    return (
      <Card>
        <Link to={`/jams/${jam.id}`}>
          <Image src={jam.image} />
        </Link>
          <Card.Content>
            <Card.Header>{jam.name}</Card.Header>
            <Card.Meta>{starsArray}</Card.Meta>
            <Card.Meta>{`$${jam.price}`}</Card.Meta>
          </Card.Content>
        </Card>
    )
  }
}


