import './App.css';
import React from "react";
import Counter from "./components/Counter";
import ChangeColor from "./components/ChangeColor/ChangeColor";
import ShowText from "./components/ShowTextComponent/ShowText";
import ShowName from "./components/showName";
import Clock from "./components/Clock/Clock";
import SwitchStatus from "./components/isOnStatus/SwitchStatus";
import Conditional from "./components/Conditional Rengering/ifElse";
import ShowLists from "./components/Lists/ShowLists";
import Textarea from "./components/Forms/Textarea";
import Select from "./components/Forms/Select";
import YrokList from "./components/Lists/YrokList";


class App extends React.Component {
  state = {
    count: 1,
    current: 0,
    color: "blue",
    secondColor: "red",
    names: ['Masha', 'Tolik', 'Valera', 'Vova'],
    time: new Date(),
    isOn: true,
    isLogin: false,
    name: 'Admin',
    showComponent: false,
    listItem: [
      {title: 'work', id: 1},
      {title: 'job', id: 2},
      {title: 'little', id: 3},
      {title: 'small', id: 4},
      {title: 'son', id: 5},
      {title: 'lot', id: 6},
    ],
    textareaValue: "",
    selectValue : "cake",
    listItems : [1,2,3,4,5,"sad","asdas"]
  }

  addItemHandler = () => {
    this.setState(() => ({
      listItems: {...this.state,listItems:this.state.listItems.push("sdad")}

    }))
}
  handleClickLogin = (state) => {
    this.setState(() => ({
      isLogin: !state.isLogin
    }))
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
  hiddeComponent = (state) => {
    this.setState(() => ({
      showComponent: !state.showComponent
    }))
  }
  changeTextAreaValue (event) {
    this.setState({textareaValue: event.target.value})
  }
  preventDefaultTextAreaValue (event) {
    event.preventDefault()
    this.setState({textareaValue:""})
  }

  changeSelectValue = (event) => {
    this.setState(() => ({
      selectValue:event.target.value
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
        <Conditional status={this.state.isLogin} name={this.state.name}
                     handleClickLogin={() => this.handleClickLogin(this.state)}
                     showComponent={this.state.showComponent}/>
        <button onClick={() => this.hiddeComponent(this.state)}>show component</button>
        <ShowLists items={this.state.listItem}/>
        <Textarea textareaValue={this.state.textareaValue}
                  changeTextAreaValue={(event) => this.changeTextAreaValue(event)} preventDefaultTextAreaValue={(event) => this.preventDefaultTextAreaValue(event)}/>
        <br />
          <Select selectValue={this.state.selectValue} changeSelectValue={(event) => this.changeSelectValue(event)}/>
        <YrokList addItemHandler={() => this.addItemHandler(this.state)} listItems={this.state.listItems}/>
      </>
    )
  }
}

export default App;
