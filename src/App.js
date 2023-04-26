import './App.css';
import React from "react";
import Counter from "./components/Counter";
import ChangeColor from "./components/ChangeColor/ChangeColor";


class App extends React.Component {
  state = {
    count: 1,
    current: 0,
    color: "blue",
    secondColor:"red",
  }
  handleClick = (state) => {
    this.setState(() => ({
      count: state.count + 1
    }));
  }

  changeColor = (state) => {
    let r = ['brown', 'red'];
    let color = this.randomColor()
    for (let el of r) {
      this.setState(() => ({
        color: color
      }))
    }
  }
  changeColorToo = (state) => {
    let r = ['brown', 'red'];
    let color = this.randomColor()
    for (let el of r) {
      this.setState(() => ({
        secondColor: color
      }))
    }
  }

  randomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }


  render() {
    return (
      <>
        <Counter handleClick={() => this.handleClick(this.state)} count={this.state.count}/>
        <ChangeColor color={this.state.color} changeColor={() => this.changeColor(this.state)} changeColorToo={() => this.changeColorToo(this.state)} secondColor={this.state.secondColor}/>
      </>
    )
  }
}

export default App;
