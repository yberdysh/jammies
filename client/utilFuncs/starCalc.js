import React from 'react'
import {times} from 'lodash';

export const countStars = (numStars) => {
    const starsArray = []
    let key = 0;
    let wholeNum = +numStars.toString().slice(0, 1)
    let emptyStars = 0
    times(wholeNum, () => starsArray.push(<i key={++key} className="fas fa-star"/>))
    const decimal = numStars - wholeNum
    if (decimal > 0.2 && decimal < 0.8){
      starsArray.push(<i key={++key} className="fas fa-star-half-alt"/>)
      wholeNum = Math.ceil(numStars)
      console.log("wholeNum", wholeNum)
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

