import React, { Component } from "react";

import { connect } from "react-redux";

import { getPosts } from "../../redux/posts";

// import PostItem from "./PostItem.js"

class Posts extends Component {
    componentDidMount() {
        this.props.getPosts();
    }
    render() {
        const { data, loading, errMsg } = this.props;
        const { title} = this.props.data;
        // const { allPosts} = this.props;
        // const allPosts = data((post, i) => <PostItem key={post + i} {...post}></PostItem>)
        if (loading) {
            return (
                <div>...Loading</div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            return (
                <div>
                    {/* <PostItem/> */}
                    {/* {allPosts} */}
                    {title}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.posts
}

export default connect(mapStateToProps, { getPosts })(Posts);
