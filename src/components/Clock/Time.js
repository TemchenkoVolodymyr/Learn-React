import React from "react";
import {Component} from "react";
import Clock from "./Clock";

class Time extends Component{
  state = {
    currentTime: new Date(),
  }
  tick() {
    this.setState({
      currentTime: new Date()
    })
  }
  componentDidMount() {
    this.timeId = setInterval(
      () => this.tick(),
      1000
    )
  }
  componentWillUnmount() {
    clearInterval(this.timeId)
  }
  render() {
    return (
      <>
        <Clock currentTime={this.state.currentTime}/>
      </>
    )
  }
}
export default Time