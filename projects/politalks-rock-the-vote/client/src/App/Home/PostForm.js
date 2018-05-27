import React, { Component } from "react";

import { connect } from "react-redux";

import { addPost } from "../../redux/posts";

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
                title: "",
                description: ""
                // showPostForm: false
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.togglePostForm = this.togglePostForm.bind(this);
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
        this.props.addPost(this.state);
        this.setState(this.initialState);

    }

    togglePostForm(event) {
        event.preventDefault();
        this.setState({ showPostForm: !this.state.showPostForm })
    }
    render() {
        console.log(this.state)
        const { title, description } = this.state;
        return (
            <div className="postFormWrapper">

                <form onSubmit={this.handleSubmit} className="postForm">

                    <button onClick={this.togglePostForm} className="createPostButt">Create Post</button>

                    {/* <p>Add New Post</p> */}

                    {this.state.showPostForm && 
                    <input onChange={this.handleChange} className="newTitle" type="text" value={title} name="title" placeholder="Title" />
                    }

                    {this.state.showPostForm && 
                    <input onChange={this.handleChange} className="newDescription" type="text" value={description} name="description" placeholder="Enter description here..." />
                    }

                    {this.state.showPostForm && 
                    <button className="submitButt">Submit</button>
                    }

                </form>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, { addPost })(PostForm);