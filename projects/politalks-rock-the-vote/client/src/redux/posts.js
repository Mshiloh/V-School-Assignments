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
                ...state,
                data: [...state.data, action.post],
                loading: false
            }
        case "EDIT_POST":
            return {
                ...state,
                data: state.data.map(post => {
                    if (post._id === action.id) {
                        return {...post, ...action.editedPost};
                    } else {
                        return post;
                    }
                }),
                loading: false
            }
        case "DELETE_POST":
            return {
                ...state,
                data: state.data.filter((post) => post._id !== action.id),
                loading: false
            }
        case "ERR_MSG":
            return {
                ...state,
                errMsg: action.errMsg,
                loading: false
            }
        default:
            return state
    }
}

export const getPosts = () => {
    return dispatch => {
        axios.get(`/posts/ `)
        .then(response => {
            console.log(response.data);
            dispatch({
                type: "GET_POSTS",
                posts: response.data
            });
        }).catch(err => {
            dispatch({
                type: "ERR_MSG",
                errMsg: "Sorry, data unavailable!"
            });
        });
    }
}

export const addPost = (post) => {
    return dispatch => {
        axios.post(`/post/`, post)
        .then(response => {
            console.log(response.data);
            dispatch({
                type: "ADD_POST",
                post: response.data
            });
        }).catch(err => {
            dispatch({
                type: "ERR_MSG",
                errMsg: "Sorry, data unavailable!"
            });
        });
    }
}
export const deletePost = (id) => {
    return dispatch => {
        axios.delete(`/posts/${id}`)
        .then(response => {
            console.log(response.data);
            dispatch({
                type: "DELETE_POST",
                id
            });
        }).catch(err => {
            dispatch({
                type: "ERR_MSG",
                errMsg: "Sorry, data unavailable!"
            });
        });
    }
}

export const editPost = (id, post) => {
    return dispatch => {
        axios.put(`/posts/${id}`, post)
        .then(response => {
            console.log(response.data);
            dispatch({
                type: "EDIT_POST",
                id,
                editedPost: response.data
            });
        }).catch(err => {
            dispatch({
                type: "ERR_MSG",
                errMsg: "Sorry, data unavailable!"
            });
        });
    }
}

export default postReducer;