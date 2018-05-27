import React, { Component } from 'react'

import { connect } from "react-redux";

import {editPost} from "../../redux/posts"

import CommentDisplay from "./CommentDisplay"
import CommentForm from "./CommentForm";


class PostItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentsShowing: false,
            commentsHidden: true,
            formShowing: false,
            formHidden: true
        };
        this.showComments = this.showComments.bind(this);
        this.hideComments = this.hideComments.bind(this);
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
    }

    showComments() {
        this.setState({
            commentsShowing: true,
            commentsHidden: false
        })
    }

    hideComments() {
        this.setState({
            commentsShowing: false,
            commentsHidden: true
        })
    }

    showForm() {
        this.setState({
            formShowing: true,
            formHidden: false
        })
    }

    hideForm() {
        this.setState({
            formShowing: false,
            formHidden: true
        })
    }

    render() {
        console.log(this.props._id);

        const { title, description, _id } = this.props;
        const { thumbsUp, thumbsDown } = this.props;

        return (
            <div className="postItemContainer">
                <p className="title">{title}</p>
                <p className="description">{description}</p>
                <div className="voteContainer">

                    <button onClick={this.handleThumbsUp} className="thumbsUpButt"><i className="fa fa-thumbs-up"></i></button>

                    {this.state.formShowing ?
                        <button onClick={this.hideForm} className="commentButt"><i className="fa fa-comment"></i></button> : null
                    }

                    {this.state.formHidden ?
                        <button onClick={this.showForm} className="commentButt"><i className="fa fa-comment"></i></button> : null
                    }

                    <button onClick={this.handleThumbsDown} className="thumbsDownButt"><i className="fa fa-thumbs-down"></i></button>

                </div>


                {this.state.formShowing ?
                    <CommentForm postId={_id} /> : null
                }

                <div>

                    {this.state.commentsHidden ?
                        <button onClick={this.showComments} className="commentsToggleButt">Comments...</button> : null
                    }

                    {this.state.commentsShowing ?
                        <button onClick={this.hideComments} className="commentsToggleButt">Comments...</button> : null
                    }

                    {this.state.commentsShowing ?
                        <CommentDisplay postId={_id} /> : null
                    }
                </div>
            </div>
        )
    }
}

export default connect("", {editPost})(PostItem);


// function PostItem(props) {
//     console.log(props._id);
//     const { title, description, _id } = this.props;
//     return (
//         <div className="postItemContainer">
//             <p className="title">{title}</p>
//             <p className="description">{description}</p>
//             <div className="voteContainer">
//                 <button className="thumbsUpButt"><i className="fa fa-thumbs-up"></i></button>
//                 <button className="commentButt"><i className="fa fa-comment"></i></button>
//                 <button className="thumbsDownButt"><i className="fa fa-thumbs-down"></i></button>
//             </div>

//             <CommentForm postId={_id} />

//             {/* <button onClick={this.showComments} className="commentsToggleButt">View Comments...</button> */}

//             {this.state.commentsShowing ?
//                 <CommentDisplay postId={_id} /> : null
//             }

//             {this.state.commentsShowing ?
//                 <button onClick={this.showComments} className="commentsToggleButt">Comments... </button> : null
//             }}




//         </div>
//     )
// }