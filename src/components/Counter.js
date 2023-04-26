import React, {Component} from 'react';

class Counter extends Component {

  render() {
    return (

      <>
        <button onClick={ () =>  this.props.handleClick()}>click</button>
        <p>{this.props.count}</p>

      </>
    )
  }
}

export default Counter


