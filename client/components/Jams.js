import React, {Component} from 'react'
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

  renderAllJams(){
    return this.props.allJams.map(jam => <JamCard key={jam.id} jam={jam}/>)
  }

  render() {
    return (
      <Banner />
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
