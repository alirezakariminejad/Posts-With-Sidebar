import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Post from "./Post";

export default class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  async getPost() {
    var response = await fetch("http://localhost:3001/posts");
    return await response.json();
  }

  componentDidMount() {
    this.getPost().then((data) => this.setState({ data }));
  }

  render() {
    return (
      <div id="root">
        <Sidebar posts={this.state.data} />
        <Post posts={this.state.data} />
      </div>
    );
  }
}
