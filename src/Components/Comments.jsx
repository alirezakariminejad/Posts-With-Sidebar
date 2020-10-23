import React from "react";
import Comment from './comment'

export default function Comments(props) {
  var comments = props.data ? props.data.map(comment => <Comment comment={comment} />) : null;
  return (
    <div className="comments">
      <p>Comments:</p>
      {comments}
    </div>
  );
}
