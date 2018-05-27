import React, { Component } from "react";

import { connect } from "react-redux";

import { getComments } from "../../redux/comments";
import { getPosts } from "../../redux/posts";

import CommentItem from "./CommentItem";

class CommentDisplay extends Component {
    componentDidMount() {
        this.props.getComments(this.props.postId);
    }
    render() {
        const { data, loading, errMsg } = this.props;
        const { postId } = this.props;

        const postedComments = data.filter(comment => comment.postId === postId).map((comment, i) => <CommentItem key={comment + i} {...comment}></CommentItem>);

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
                <div className="postedCommentsContainer">
                    {postedComments}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.comments
}

export default connect(mapStateToProps, { getComments })(CommentDisplay);