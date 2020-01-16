import React, { Component } from "react";
class Progress extends Component {
  state = {};
  render() {
    return (
      <p>
        {this.props.index}/{this.props.length}
      </p>
    );
  }
}

export default Progress;
