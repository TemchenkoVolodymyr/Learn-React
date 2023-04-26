import './App.css';
import React from "react";
import Counter from "./components/Counter";
import ChangeColor from "./components/ChangeColor/ChangeColor";
import ShowText from "./components/showTextComponent/ShowText";
import ShowName from "./components/showName";


class App extends React.Component {
  state = {
    count: 1,
    current: 0,
    color: "blue",
    secondColor: "red",
    names : ['Masha','Tolik','Valera','Vova'],
  }
  handleClick = (state) => {
    this.setState(() => ({
      count: state.count + 1
    }));
  }
  handleClickSub = (state) => {
    if (state.count <= 0) {
      return state.count
    } else {
      this.setState(() => ({
        count: state.count - 1
      }))
    }
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
        <ShowText text={"Some text from lesson 2"}/>
        <Counter handleClick={() => this.handleClick(this.state)}
                 handleClickSub={() => this.handleClickSub(this.state)}
                 count={this.state.count}/>
        <ChangeColor color={this.state.color} changeColor={() => this.changeColor(this.state)}
                     changeColorToo={() => this.changeColorToo(this.state)} secondColor={this.state.secondColor}/>
        {this.state.names.map(name => <ShowName name={name}/>)}
      </>
    )
  }
}

export default App;
