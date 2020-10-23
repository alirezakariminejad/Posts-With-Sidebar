import React from "react";
import Link from "./Link";

export default function Sidebar(props) {
  var link = props.posts ? props.posts.map((data, index) =>
    <Link title={data.title} handleClick={props.handleChangeCurrentPost} index={index} />)
    : null;
  return (
    <aside>
      <ul>{link}</ul>
    </aside>
  );
}
