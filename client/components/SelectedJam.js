import React, { Component } from 'react';
import {connect} from 'react-redux';
import {times} from 'lodash';
import {fetchSingleJam} from '../store'
import Review from './Review'
import {jamStars} from '../utilFuncs/starCalc'

export class SelectedJam extends Component {
    componentDidMount(){
      const jamId = this.props.match.params.id
      this.props.fetchSingleJam(jamId)
    }

    render(){
      const {selectedJam} = this.props
      return (
        <div className="show-page">
          <h1>{selectedJam.name}</h1>
          <p>{selectedJam.numStars && jamStars(selectedJam.numStars)}({selectedJam.reviews && selectedJam.reviews.length})</p>
          <div className="selectedJam">
          <div className="jam-img">
            <img src={selectedJam.image} alt=""/>
            <h4>Description: </h4>
            <p>{selectedJam.description}</p>
          </div>
          <div className="stars-reviews">
            <h4>Reviews: </h4>
            {selectedJam.reviews && selectedJam.reviews.map(review => <Review key={review.id} review={review}/>)}
          </div>
        </div>
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
