import React from "react";
import {Component} from "react";
import ButtonAddItem from "./Yrok";

class ListYrok extends Component {

  render() {
  // let[listItems,addItemHandler] = this.props
    console.log(this.props)
    return(
      <>
<ButtonAddItem addItemHandler={this.props.addItemHandler}/>
        <ul>
          {this.props.listItems.map(list => <li>{list}</li>)}
        </ul>

      </>
    )
  }
}
export default ListYrok;