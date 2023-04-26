import React from "react";
import {Component} from "react";

class ShowName extends Component {
  render() {
    return (
      <>
        <p>{this.props.name}</p>
      </>
    )
  }
}
export default ShowName;