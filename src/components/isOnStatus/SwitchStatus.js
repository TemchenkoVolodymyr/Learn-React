import React from "react";
import {Component} from "react";

class SwitchStatus extends Component{
  render() {
    return (
      <button onClick={() =>  this.props.isOnStatus()}>{this.props.status ? "On" : "Off"}</button>
    )
  }
}
export default SwitchStatus;