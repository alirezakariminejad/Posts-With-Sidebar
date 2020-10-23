import React, { Component } from "react";
import Content from "./Content";
import Comment from "./Comments";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: null,
    };
  }

  async getComments() {
    var comments = await fetch(`http://localhost:3001/comments?post-id=${this.props.posts.id}`);
    return await comments.json();
  }

  setComments() {
    this.getComments().then((comments) => this.setState({ comments }));
  }

  componentDidMount() {
    if (this.props.posts) {
      this.setComments();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.posts.id !== this.props.posts.id) {
      this.setComments();
    }
  }

  render() {
    return (
      <div className="container">
        <Content posts={this.props.posts} />
        {null != this.state.comments && <Comment data={this.state.comments} />}
      </div>
    );
  }
}
