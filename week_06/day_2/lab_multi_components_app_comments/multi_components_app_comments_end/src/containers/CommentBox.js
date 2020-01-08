import React, { Component } from "react";
import CommentList from "../components/CommentList";

class CommentBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1,
          author: "Seneca",
          text: "Luck is what happens when preparation meets opportunity."
        },
        { id: 2,
          author: "Dr. Suess",
          text: "Don't cry because it's over, smile because it happened."
        }
      ]
    };
  }

  render() {
    return (
      <div className="comment-box">
        <h2>Comments</h2>
        <CommentList data={this.state.data} />
      </div>
    );
  }
}

export default CommentBox;
