import React from "react";
import {Component} from "react";

class Conditional extends Component{


  render() {
    if(!this.props.showComponent){
      return null
    }
    return (
      <>
<h1>Hello</h1>
        {this.props.status &&          // && работает как условный оператор if , если this.props.status === true то покажит <p> , если false то не покажит
          // либо тернарный оператор <div> Пользователь <b>{isLoggedIn ? 'сейчас' : 'не'}</b> на сайте. </div>
        <p>Your name : {this.props.name}</p>
        }
        <button onClick={this.props.handleClickLogin}>Login</button>
      </>
    )
  }
}
export default Conditional;