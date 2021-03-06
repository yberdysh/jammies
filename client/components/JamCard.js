import React, { Component } from 'react';
import {connect} from 'react-redux'
import {jamStars, formatNumStars} from '../utilFuncs/starCalc'
import {Link} from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'
import {times} from 'lodash';

export class JamCard extends Component {

  render() {
    const { jam } = this.props
    const starsArray = jam.numStars && jamStars(jam.numStars)
    return (
      <Card>
        <Link to={`/jams/${jam.id}`}>
          <Image src={jam.image} />
        </Link>
          <Card.Content>
            <div className="jamCard">
              <Card.Header className="jamName">{jam.name}</Card.Header>
              <Card.Meta >{starsArray}({jam.reviews.length} reviews {formatNumStars(jam.numStars)})</Card.Meta>
              <Card.Meta>{`$${jam.price}`}</Card.Meta>
              </div>
          </Card.Content>
        </Card>
    )
  }
}


