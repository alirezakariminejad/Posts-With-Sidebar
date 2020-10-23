import React from "react";

export default function Link(props) {
  return <li onClick={(e) => props.handleClick(props.index)} index={props.index}>{props.title}</li>;
}
