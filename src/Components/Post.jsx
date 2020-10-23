import React, { Component } from "react";
import Content from "./Content";
import Comment from './Comment'

export default class Post extends Component {
  render() {
    return (
      <div className="container">
        <Content posts={this.props.posts} />
        <Comment />
      </div>
    );
  }
}
