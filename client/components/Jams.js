import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllJams} from '../store'

export class Jams extends Component {

  componentDidMount() {
    this.props.getAllJams()
  }

  render() {
    console.log("PROPS", this.props)
    return (
      <div>Jams</div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE", state)
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
