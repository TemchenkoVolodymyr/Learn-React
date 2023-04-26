import './App.css';
import React from "react";
import Counter from "./components/Counter";
import ChangeColor from "./components/ChangeColor/ChangeColor";
import ShowText from "./components/ShowTextComponent/ShowText";
import ShowName from "./components/showName";
import Clock from "./components/Clock/Clock";
import SwitchStatus from "./components/isOnStatus/SwitchStatus";


class App extends React.Component {
  state = {
    count: 1,
    current: 0,
    color: "blue",
    secondColor: "red",
    names: ['Masha', 'Tolik', 'Valera', 'Vova'],
    time: new Date(),
    isOn: true,

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

  tick() {
    this.setState({
      time: new Date()
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

  switchStatus = (state) => {
    this.setState(() => ({
      isOn: !state.isOn,
    }))
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
        <Clock time={this.state.time}/>
        <SwitchStatus switchStatus={() => this.switchStatus(this.state)} status={this.state.isOn}/>
      </>
    )
  }
}

export default App;
