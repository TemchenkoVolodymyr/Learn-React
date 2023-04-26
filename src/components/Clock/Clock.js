import React from "react";
import {Component} from "react";

class Clock extends Component {
  render() {
    return (
      <>
        <p>{this.props.time.toLocaleString()}</p>
      </>
    )
  }
}
export default Clock;