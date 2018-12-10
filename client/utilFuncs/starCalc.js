import React from 'react'
import {times} from 'lodash';

export const jamStars = (numStars) => {
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

export const reviewStars = function(numStars){
    const solidStars = numStars
    const emptyStars = 5 - numStars
    let key = 0;
    let iconsToRender = [];
    times(solidStars, () => {
      iconsToRender.push(<i key={++key} className="fas fa-star"/>)
    });
    times(emptyStars, () => {
      iconsToRender.push(<i key={++key} className="far fa-star"/>)
    });
    return iconsToRender
  }

  export const formatNumStars = function(numStars){
    // console.log(numStars)
    const str = numStars.toString()
    let finalNum;
    if (str.includes(".")){
      return numStars
    } else {
      finalNum = str + ".0"
      return finalNum
    }
  }
