import axios from 'axios'

//Action types
const GET_ALL_JAMS = 'GET_ALL_JAMS'
const GET_SINGLE_JAM = 'GET_SINGLE_JAM'
const CALC_JAM_RATING = 'CALC_JAM_RATING'

//Initial State
export const initialJams = {
  allJams: [],
  selectedJam: {}
}

//Action Creators
export const getAllJams = allJams => ({
  type: GET_ALL_JAMS,
  allJams
})
export const getSingleJam = selectedJam => ({
  type: GET_SINGLE_JAM,
  selectedJam
})
export const calcJamRating = starsArray => ({
  type: CALC_JAM_RATING,
  starsArray
})

//Thunk
export const fetchAllJams = () => async dispatch => {
  const res = await axios.get('/api/jams')
  const jams = res.data
  dispatch(getAllJams(jams))
}

export const fetchSingleJam = jamId => async dispatch => {
  const res = await axios.get(`/api/jams/${jamId}`)
  const jam = res.data
  dispatch(getSingleJam(jam))
}

// starsArray function to render stars
export const countStars = numStars => {
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

//Reducer
const jamReducer = (state = initialJams, action) => {
  switch (action.type) {
    case GET_ALL_JAMS:
      return {...state, allJams: action.allJams}
    case GET_SINGLE_JAM:
      return {...state, selectedJam: action.selectedJam}
    case CALC_JAM_RATING:
      return {...state, selectedJam: {...selectedJam, starsArray: action.starsArray}}
    default:
      return state
  }
}


export default jamReducer
