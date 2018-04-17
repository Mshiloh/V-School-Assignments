import axios from "axios";

const swapiUrl = "https://swapi.co/api/planets/";

//setting our inital state (the default)
const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}

//state and data info
const planetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PLANETS":
            return {
                ...state,
                data: action.planets,
                loading: false,
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

//action creator, return object and/or function (func takes dispatch as param)
export const getPlanets = () => {
    return dispatch => {
        axios.get(swapiUrl).then(response => {
            dispatch({
                type: "GET_PLANETS",
                planets: response.data.results
            })
        })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry, your data is unavailable."
                })
            })
    }
};

export default planetReducer;