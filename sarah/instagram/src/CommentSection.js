// Comment Section Component
// should render an input tag
// should call componentDidMount
// should store comments in state
// should add comments to state upon mounting

import React, { Component } from 'react';


class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  // componentDidMount() {
  //
  // }

  render() {
    return (
      <div>Text from the Comment Section component (passed to the Post Container)</div>
    )
  }
}

export default CommentSection;
