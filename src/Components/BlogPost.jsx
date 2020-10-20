import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Post from "./Post";

export default class BlogPost extends Component {
  render() {
    return (
      <div id="root">
        <Sidebar />
        <Post />
      </div>
    );
  }
}
