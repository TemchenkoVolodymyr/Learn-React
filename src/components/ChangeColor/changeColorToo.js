import React from "react";
import {Component} from "react";


class ChangeColorToo extends Component{
  render() {
    return(
    <>
      <button onClick={() => this.props.changeColorToo()}>Change Color Too</button>
      <p style={{color:this.props.secondColor}}>second text will be change color</p>
    </>
    )
  }
}
export default ChangeColorToo;