import axios from "axios";

const initialState = {
  data: [],
  loading: true,
  errMsg: ""
}

const hourlyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_HOURLY":
      return {
        ...state,
        data: action.hourly,
        loading: false
      }
    case "ERR_MSG":
      return {
        ...state,
        loading: false,
        errMsg: action.errMsg
      }
    default:
      return state;
  }
}

const darkSky = "http://cors.vschool.io?url=https://api.darksky.net/forecast/22d6c6ed8f022dbccbc67b09daa4a6d5/40.758701,-111.876183";

export const getHourly = () => {
  return dispatch => {
    axios.get(darkSky)
      .then(response => {
        console.log(response.data.hourly);
        dispatch({
          type: "GET_HOURLY",
          weather: response.data
        })        
      })
  }
};

export default hourlyReducer;