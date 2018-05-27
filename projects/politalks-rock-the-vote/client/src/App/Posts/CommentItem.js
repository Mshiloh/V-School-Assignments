import React, { Component } from "react";

import CommentForm from "./CommentForm";

export default class CommentItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentsShowing: true
        };
        this.showComments = this.showComments.bind(this);
    }

    showComments() {
        this.setState({
            commentsShowing: true
        })
    }
    render() {
        const { content } = this.props;
        return (
            <div className="commentsWrapper">

                <div className="commentsContainer">

                    {this.state.commentsShowing ?
                        <p className="comments">{content}</p> : null
                    }
                    
                </div>

            </div>
        )
    }
}