import React from "react";

const Comment = (props) => {
  return (
    <div className="comment">
      <h4>{props.children}</h4>
      <p>{props.author}</p>
    </div>
  );
}

export default Comment;
