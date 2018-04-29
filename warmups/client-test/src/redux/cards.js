import axios from "axios";

const initialState = {
    data: [],
    loading: true,
    errMsg: "",
    currentIndex: 0
}

const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CARDS":
            return {
                ...state,
                data: action.cards,
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

const flashdeck = "/cards/";

export const getCards = (deckId) => {
    return dispatch => {
        axios.get(`${flashdeck}?deckId=${deckId}`)
            .then(response => {
                dispatch({
                    type: "GET_CARDS",
                    cards: response.data
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