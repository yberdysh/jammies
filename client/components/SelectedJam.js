import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchSingleJam} from '../store'

export class SelectedJam extends Component {
    componentDidMount(){
      const jamId = this.props.match.params.id
      this.props.fetchSingleJam(jamId)
    }
    render(){
    // console.log("selectedJam", selectedJam)
      return (
        <div className="selectedJam">
          <h1>{this.props.selectedJam.name}</h1>
        </div>
      );
    }
  }

const mapStateToProps = (state) => ({
  selectedJam: state.jamReducer.selectedJam
})

const mapDispatchToProps = (dispatch) => ({
  fetchSingleJam: (id) => dispatch(fetchSingleJam(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectedJam)
