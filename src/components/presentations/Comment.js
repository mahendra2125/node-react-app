import React, { Component } from "react";

class Comment extends Component {
    render() {
        return (
            <div>
                <h2><a href="#">{this.props.currentComment.username}</a></h2>
                <span>{this.props.currentComment.body}</span>
                <p>{this.props.currentComment.timestamp}</p>
            </div>
        )
    }
}

export default Comment;