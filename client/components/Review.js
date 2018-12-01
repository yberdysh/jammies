import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Review({review}) {
  const countStars = function(numStars){
    // this countStars function will only include whole numbers since it's
    // num stars from review, and users can only give whole numbers in review
  }
  console.log("count stars:", countStars(review.numStars))

    return (
      <div>{review.content}
        <i className="fas fa-star"/>
      </div>
    );
}

export default Review
