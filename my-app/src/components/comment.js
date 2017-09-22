import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return(
      <tr>
        <td>{this.props.comment}</td>
        <td>{this.props.commentauthor}</td>
        <td>{this.props.commentdate}</td>
      </tr>
    );
  }
}

export default Comment;