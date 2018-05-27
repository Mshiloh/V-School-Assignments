import React, { Component } from "react";

import { connect } from "react-redux";

import { addComment } from "../../redux/comments";


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            content: ""
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addComment(this.state, this.props.postId);
        this.setState(this.initialState);

    }

    render() {
        const { content } = this.state;
        return (
            <div className="commentFormWrapper">

                <form onSubmit={this.handleSubmit} className="commentForm">

                    <input onChange={this.handleChange} className="newComment" type="text" value={content} name="content" placeholder="Enter comment..." />

                    <br />

                    <button className="saveButt"><i class="fa fa-caret-square-o-right"></i></button>


                </form>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return state.comment
}

export default connect(mapStateToProps, { addComment })(CommentForm);