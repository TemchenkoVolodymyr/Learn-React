import React from "react";
import {Component} from "react";
import ChangeColorToo from "./changeColorToo";

class ChangeColor extends  Component{
  render() {
    return (
      <>
        <button onClick={() => this.props.changeColor()}>Change Color</button>
        <p style={{color : this.props.color}}>There will be text that will be change color</p>
        <ChangeColorToo changeColorToo={ () => this.props.changeColorToo()} secondColor={this.props.secondColor} />
      </>
    )
  }
}
export default ChangeColor;