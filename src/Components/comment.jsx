import React from "react";

export default function comment(props) {
  return (
    <div className="comment">
          <p>{props.comment.body}</p>
    </div>
  );
}
