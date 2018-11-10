import axios from 'axios'

//Action types
const GET_ALL_JAMS = 'GET_ALL_JAMS'
const GET_SINGLE_JAM = 'GET_SINGLE_JAM'

//Initial State
export const initialJams = {
  allJams: [],
  selectedProduct: {}
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

//Thunk
export const fetchAllJams = () => async dispatch => {
  const res = await axios.get('/api/jams')
  const jams = res.data
  dispatch(getAllJams(jams))
}

export const fetchSingleJam = jamId => async dispatch => {
  const res = await axios.get(`/api/products/${jamId}`)
  const jam = res.data
  dispatch(getSingleJam(jam))
}

//Reducer
const jamReducer = (state = initialJams, action) => {
  switch (action.type) {
    case GET_ALL_JAMS:
      return {...state, allJams: action.allJams}
    case GET_SINGLE_JAM:
      return {...state, selectedJam: action.selectedJam}
    default:
      return state
  }
}

export default jamReducer
