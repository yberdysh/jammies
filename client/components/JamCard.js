import React, { Component } from 'react';
import {connect} from 'react-redux'
// import { Card, Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'
import {times} from 'lodash';
// import {Grid, Col, Row} from 'react-bootstrap'

export class JamCard extends Component {

  countStars = (numStars) => {
    const starsArray = []
    let key = 0;
    let wholeNum = +numStars.toString().slice(0, 1)
    let emptyStars = 0
    times(wholeNum, () => starsArray.push(<i key={++key} className="fas fa-star"/>))
    const decimal = numStars - wholeNum
    if (decimal > 0.2 && decimal < 0.8){
      starsArray.push(<i key={++key} className="fas fa-star-half-alt"/>)
      wholeNum = Math.ceil(numStars)
      console.log("wholeNum", wholeNum)
    } else if (decimal >= 0.8){
      starsArray.push(<i key={++key} className="fas fa-star"/>)
      wholeNum = Math.ceil(numStars)
    } else {
      wholeNum = Math.floor(numStars)
    }
    emptyStars = 5 - wholeNum
    times(emptyStars, () => starsArray.push(<i key={++key} className="far fa-star"/>))
    return starsArray
  }

  render() {
    const { jam } = this.props
    const starsArray = jam.numStars && this.countStars(jam.numStars)
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

