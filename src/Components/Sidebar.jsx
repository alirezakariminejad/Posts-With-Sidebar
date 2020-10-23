import React from "react";
import Link from "./Link";

export default function Sidebar(props) {
  var link = props.posts ? props.posts.map(data => <Link title={data.title} />) : null;
  return (
    <aside>
      <ul>{link}</ul>
    </aside>
  );
}
