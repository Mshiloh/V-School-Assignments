import axios from "axios";

const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_POSTS":
            return {
                ...state,
                data: action.posts,
                loading: false
            }
        case "ADD_POST":
            return {
                data: [...state.data, action.post]
            }
        case "EDIT_POST":
            return {
                ...state,
                data: state.data.map(post => {
                    if (post._id === action.id) {
                        console.log(action.post)
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
            return state
    }
}

const politalks = "/posts/"

export const getPosts = () => {
    return dispatch => {
        axios.get(politalks)
            .then(response => {
                console.log(response.data);
                dispatch({
                    type: "GET_POSTS",
                    posts: response.data
                });
            }).catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry, data unavailable."
                });
            });
    }
}

export const addPost = (post) => {
    return dispatch => {
        axios.post(politalks, { ...post })
            .then(response => {
                console.log(response.data);
                dispatch({
                    type: "ADD_POST",
                    post: response.data
                });
            })
    }
}

export const editPost = (id, editedPost) => {
    return dispatch => {
        axios.put(politalks + id, editedPost)
            .then(response => {
                dispatch({
                    type: "EDIT_POST",
                    editedPost: response.data,
                    id
                });
                console.log(editedPost)
                
            }).catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry, data unavailable."
                });
            });
    }
}

export const deletePost = id => {
    return dispatch => {
        axios.delete(politalks + id)
            .then(response => {
                console.log(response.data);
                dispatch({
                    type: "DELETE_POST",
                    id: id,
                    deletedPost: response.data
                });
            }).catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry, data unavailable."
                });
            });
    }
}

export default postReducer;