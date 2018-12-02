import React, { Component } from 'react';
import {times} from 'lodash'
import {reviewStars} from '../utilFuncs/starCalc'


function Review({review}) {
    return (
      <div>{review.content}
        {reviewStars(review.numStars)}
      </div>
    );
}

export default Review
