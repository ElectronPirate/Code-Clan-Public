import React from "react";
import Comment from "./Comment";

const CommentList = (props) => {
  const comments = props.data.map((comment, index) => {
    return (
      <Comment author={comment.author} key={index}>{comment.text}</Comment>
    );
  });

  return (
    <div className="comment-list">
      {comments}
    </div>
  )
};

export default CommentList;
