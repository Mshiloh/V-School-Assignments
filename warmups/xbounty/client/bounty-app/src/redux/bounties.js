import axios from "axios";

const initialState = {
  data: {},
  loading: true,
  errMsg: ""
}

const bountiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOUNTIES":
      return {
        ...state,
        data: action.bounties,
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

const bountyApi = "/bounties";

export const getBounties = () => {
  return dispatch => {
    axios.get(bountyApi)
      .then(response => {
        dispatch({
          type: "GET_BOUNTIES",
          bounties: response.data
        })
      })
  }
};

export default bountiesReducer;
