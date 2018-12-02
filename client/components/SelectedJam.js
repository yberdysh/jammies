import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchSingleJam} from '../store'
import Review from './Review'

export class SelectedJam extends Component {
    componentDidMount(){
      const jamId = this.props.match.params.id
      this.props.fetchSingleJam(jamId)
    }

  countStars = (numStars) => {
    // function for determining num stars for a jam based on reviews
    // this will include decimals
    // console.log("numStars", numStars)
    // const wholeNum = numStars.toString().slice(0, 1)
    // const decimal = numStars - parseInt(wholeNum)
  }

  // const countStars = function(numStars){
  //   const solidStars = numStars
  //   const emptyStars = 5 - numStars
  //   let key = 0;
  //   let iconsToRender = [];
  //   _.times(solidStars, () => {
  //     iconsToRender.push(<i key={++key} className="fas fa-star"/>)
  //   });
  //   _.times(emptyStars, () => {
  //     iconsToRender.push(<i key={++key} className="far fa-star"/>)
  //   });
  //   return iconsToRender
  // }

    render(){
      const {selectedJam} = this.props
      // console.log("selectedJam", selectedJam);
      // console.log("selectedJam stars func", this.countStars)
      return (
        <div className="selectedJam">
          <h1>{selectedJam.name}</h1>
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
