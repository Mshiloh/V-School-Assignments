import axios from "axios";

const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COMMENTS":
            return {
                ...state,
                data: action.comments,
                loading: false
            }
        case "ADD_COMMENT":
            return {
                ...state,
                data: [...state.data, action.comment],
            }
            case "EDIT_COMMENT":
            return {
                ...state,
                data: state.data.map(comment => {
                    if (comment._id === action.id) {
                        return action.updatedComment
                    } else {
                        return comment
                    }
                })
            }
        case "DELETE_COMMENT":
            return {
                data: state.data.filter((comment) => comment._id !== action.id)
            }
        case "ERR_MSG":
            return {
                ...state,
                loading: false,                
                errMsg: action.errMsg
            }
        default:
            return state
    }
}

const politalks = "/comments/"

// GET
export const getComments = () => {
    return dispatch => {
        axios.get(`${politalks}`)
        .then(response => {
            console.log(response.data);
            dispatch({
                type: "GET_COMMENTS",
                comments: response.data
            });
        }).catch(err => {
            dispatch({
                type: "ERR_MSG",
                errMsg: "Sorry, data unavailable."
            });
        });
    }
}

// ADD
export const addComment = (comment, postId) => {
    return dispatch => {
        axios.post(politalks, {...comment, postId})
        .then(response => {
            dispatch({
                type: "ADD_COMMENT",
                comment: response.data
            });
        }).catch(err => {
            dispatch({
                type: "ERR_MSG",
                errMsg: "Sorry, data unavailable."
            });
        });
    }
}

export const editComment = (id, updatedComment) => {
    return dispatch => {
        axios.put(politalks + id, updatedComment)
            .then(response => {
                dispatch({
                    type: "EDIT_Comment",
                    id: id,
                    updatedComment: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry, your data is unavailable."
                });
            })
    }
}

// DELETE
export const deleteComment = id => {
    return dispatch => {
        axios.delete(politalks + id)
        .then(response => {
            console.log(response.data);
            dispatch({
                type: "DELETE_COMMENT",
                id: id,
            });
        }).catch(err => {
            dispatch({
                type: "ERR_MSG",
                errMsg: "Sorry, data unavailable."
            });
        });
    }
}

export default commentReducer;