import React from "react";

export default function Content(props) {
  return (
    <div className="post">
      <img src={`/assets/${props.posts.image}`} alt={props.posts.title} />
      <h1>{props.posts.title}</h1>
      <div>{props.posts.body}</div>
    </div>
  );
}
