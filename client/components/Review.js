import React, { Component } from 'react';
import {times} from 'lodash'
import {reviewStars} from '../utilFuncs/starCalc'


function Review({review}) {
    return (
      <div>
        <p>{reviewStars(review.numStars)}</p>
        <p>{review.content}</p>
      </div>
    );
}

export default Review
