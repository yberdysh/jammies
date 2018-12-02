import React, { Component } from 'react';
import _ from 'lodash'


function Review({review}) {
  const countStars = function(numStars){
    const solidStars = numStars
    const emptyStars = 5 - numStars
    let key = 0;
    let iconsToRender = [];
    _.times(solidStars, () => {
      iconsToRender.push(<i key={++key} className="fas fa-star"/>)
    });
    _.times(emptyStars, () => {
      iconsToRender.push(<i key={++key} className="far fa-star"/>)
    });
    return iconsToRender
  }

    return (
      <div>{review.content}
        {countStars(review.numStars)}
      </div>
    );
}

export default Review
