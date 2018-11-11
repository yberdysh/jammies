import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Card, Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom'
// import {Grid, Col, Row} from 'react-bootstrap'

export class JamCard extends Component {

  render() {
    const { jam } = this.props
    return (
      <Link to={`/jams/${jam.id}`}>
        <div className="card" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url(${this.props.jam.image})`}}>
          <div className="card-category">Popular</div>
          <div className="card-description">
            <h2>Name</h2>
            <p>Very cool city, the best</p>
          </div>
      </div>
      </Link>
    )
  }

}
