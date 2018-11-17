import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllJams} from '../store'
import { Grid, Menu } from 'semantic-ui-react'
import {JamCard} from './JamCard'
import {Banner} from './Banner'


export class Jams extends Component {

  componentDidMount() {
    this.props.getAllJams()
  }

  render() {
    console.log("PROPS", this.props)
    return (
      <Fragment>
        <Banner />
        {this.props.allJams.length && <div className="allProducts">{this.props.allJams.map(jam => {
          return (
              <div key={jam.id}>
                <JamCard jam={jam}/>
              </div>
            )
        })}  </div> }
      </Fragment>
      )
  }
}

const mapStateToProps = state => {
  return {
    allJams: state.jamReducer.allJams,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllJams: () => dispatch(fetchAllJams())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jams)
