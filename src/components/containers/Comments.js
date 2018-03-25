import React, { Component } from "react";
import Comment from '../presentations/Comment';

class Comments extends Component {
    constructor() {
        super();
        this.state = {
            comment: {
                username: '',
                body: '',
                timestamp: ''
            },
            list: []
        }
    }

    submitComment(event) {
        console.log("submit comment", JSON.stringify(this.state.comment));
        let updatedList = Object.assign([], this.state.list);
        updatedList.push(this.state.comment);

        this.setState({
            list: updatedList
        });
    }

    updateUsername(event) {
        let updatedComment = Object.assign({}, this.state.comment);
        updatedComment.username = event.target.value;

        this.setState({
            comment: updatedComment
        });
    }

    updateBody(event) {
        let updatedComment = Object.assign({}, this.state.comment);
        updatedComment.body = event.target.value;

        this.setState({
            comment: updatedComment
        });
    }

    updateTimestamp(event) {
        let updatedComment = Object.assign({}, this.state.comment);
        updatedComment.timestamp = event.target.value;

        this.setState({
            comment: updatedComment
        });
    }

    render() {
        const listItems = this.state.list.map((cmt, index) => {
            return (
                <li className="list-group-item" key={index}><Comment currentComment={cmt}/></li>
            ) 
        });

        return (
            <div>
                <ol className="list-group">
                    {listItems}
                </ol>

                <input onChange={this.updateUsername.bind(this)} type="text" className="form-control" placeholder="Username" />
                <input onChange={this.updateTimestamp.bind(this)} type="text" className="form-control" placeholder="Timestamp" />
                <textarea onChange={this.updateBody.bind(this)} className="form-control" placeholder="Comment"></textarea>
                <input type="button" className="btn btn-info" onClick={this.submitComment.bind(this)} value="Save"/>
            </div>
        )
    }
}

export default Comments;