import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import _ from 'lodash'


function Review({review}) {
  const countStars = function(numStars){
    const solidStars = numStars
    const emptyStars = 5 - numStars
    let iconsToRender = [];
    _.times(solidStars, () => {
      iconsToRender.push(<i className="fas fa-star"/>)
    });
    _.times(emptyStars, () => {
      iconsToRender.push(<i class="far fa-star"/>)
    });
    console.log('icons to render', iconsToRender)
    return iconsToRender
  }

    return (
      <div>{review.content}
        {countStars(review.numStars)}
      </div>
    );
}

export default Review
