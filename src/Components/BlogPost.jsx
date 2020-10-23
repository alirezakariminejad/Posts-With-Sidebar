import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Post from "./Post";

export default class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      currentPost: null,
    };
    this.handleChangeCurrentPost = this.handleChangeCurrentPost.bind(this);
  }

  async getPost() {
    var response = await fetch("http://localhost:3001/posts");
    return await response.json();
  }

  componentDidMount() {
    this.getPost().then((data) => this.setState({ data, currentPost: 0 }));
  }

  handleChangeCurrentPost(index) {
    this.setState({ currentPost: index });
  }

  render() {
    return (
      <div id="root">
        <Sidebar posts={this.state.data} handleChangeCurrentPost={this.handleChangeCurrentPost} />
        {null !== this.state.currentPost ? <Post posts={this.state.data[this.state.currentPost]} /> : null}
      </div>
    );
  }
}
