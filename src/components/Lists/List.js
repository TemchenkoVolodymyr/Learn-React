import React from "react";
import {Component} from "react";

class List extends Component{
  render() {
    return(
      <>
        <li>{this.props.item}</li>
      </>
    )
  }
}
export default List;