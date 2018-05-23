import axios from "axios";

const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_POSTS":
            return {
                ...state,
                data: action.posts,
                loading: false
            }
        case "NEW_POST":
            return {
                data: [...state.data, action.post]
            }
        case "EDIT_POST":
            return {
                ...state,
                data: state.data.map(post => {
                    if (post._id === action.id) {
                        console.log(action.editedPost)
                    } else {
                        return post
                    }
                })
            }
        case "DELETE_POST":
            return {
                data: state.data.filter((post, id) => id !== action.id).map(post => {
                    if (post._id === action.id) {
                        return action.deletedPost
                    } else {
                        return post
                    }
                })
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

const politalks = "/api/posts/";

export const getPosts = () => {
    return dispatch => {
        axios.get(politalks)
            .then(response => {
                dispatch({
                    type: "GET_POSTS",
                    posts: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry, your data is not available."
                })
            });
    }
}

export const newPost = (post) => {
    return dispatch => {
        axios.post(politalks, { ...post })
            .then(response => {
                dispatch({
                    type: "NEW_POST",
                    post: response.data
                })
            })
            // .catch(err => {
            //     dispatch({
            //         type: "ERR_MSG",
            //         errMsg: "Sorry, your data is not available."
            //     })
            // });
    }
}

export const editPost = (id, editedPost) => {
    return dispatch => {
        axios.put(politalks + id, editedPost)
            .then(response => {
                dispatch({
                    type: "EDIT_POST",
                    id: id,
                    editedPost: response.data
                })
            })
            // .catch(err => {
            //     dispatch({
            //         type: "ERR_MSG",
            //         errMsg: "Sorry, your data is not available."
            //     })
            // });
    }
}

export const deletePost = id => {
    return dispatch => {
        axios.delete(politalks + id)
            .then(response => {
                dispatch({
                    type: "DELETE_POST",
                    id: id,
                    deletePost: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry, your data is not available."
                })
            });
    }
}

export default postsReducer;