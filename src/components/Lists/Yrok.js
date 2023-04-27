import React from "react";
import {Component} from "react";

class ButtonAddItem extends Component {
  render() {
    return(
      <>
        <button onClick={() => this.props.addItemHandler()}>add item to array</button>

      </>
    )
  }
}
export default ButtonAddItem;