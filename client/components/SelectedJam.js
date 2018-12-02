import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchSingleJam} from '../store'
import Review from './Review'
import {times} from 'lodash';

// consider refactoring numStars method or putting on backend

export class SelectedJam extends Component {
    componentDidMount(){
      const jamId = this.props.match.params.id
      this.props.fetchSingleJam(jamId)
    }

  countStars = (numStars) => {
    const starsArray = []
    let key = 0;
    let wholeNum = +numStars.toString().slice(0, 1)
    let emptyStars = 0
    times(wholeNum, () => starsArray.push(<i key={++key} className="fas fa-star"/>))
    const decimal = numStars - wholeNum
    console.log("decimal", decimal)
    if (decimal > 0.2 && decimal < 0.8){
      starsArray.push(<i key={++key} className="fas fa-star-half-alt"/>)
      wholeNum = Math.ceil(numStars)
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

    render(){
      const {selectedJam} = this.props
      // selectedJam.numStars && this.countStars(selectedJam.numStars)
      // console.log("selectedJam stars func", this.countStars)
      return (
        <div className="selectedJam">
          <h1>{selectedJam.name}</h1>
          {selectedJam.numStars && this.countStars(selectedJam.numStars)}
          <img src={selectedJam.image} alt=""/>
          <p>{selectedJam.description}</p>
          <h2>Reviews: {selectedJam.reviews && selectedJam.reviews.map(review => <Review key={review.id} review={review}/>)}</h2>
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
