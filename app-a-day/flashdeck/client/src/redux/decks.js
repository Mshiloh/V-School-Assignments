import axios from "axios";

const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}

const decksReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DECKS":
            return {
                ...state,
                data: action.decks,
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

const flashdeck = "/decks"

export const getDecks = () => {
    return dispatch => {
        axios.get(flashdeck)
            .then(response => {
                dispatch({
                    type: "GET_DECKS",
                    decks: response.data
                })
                console.log(response.data);
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry, your data is unavailable"
                });
            });
    }
}

export default decksReducer;