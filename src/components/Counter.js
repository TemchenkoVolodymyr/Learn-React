import React, {Component} from 'react';

class Counter extends Component {

  render() {
    return (

      <>
        <button onClick={ () =>  this.props.handleClick()}>+</button>
        <button onClick={() => this.props.handleClickSub()}>-</button>
        <p>{this.props.count}</p>

      </>
    )
  }
}

export default Counter


