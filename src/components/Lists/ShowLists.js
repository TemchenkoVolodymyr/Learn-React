import React from "react";
import {Component} from "react";
import List from "./List";

class ShowLists extends Component{
  render() {
    // Спискам всегда надо key ,если key не поставить то React будет присваивать index по умолчанию и в дальнейшем при смене индекса элемента возможны ошибки
    return(
      <>
        <ul>
          {this.props.items.map(item => <List key={item.id.toString()} item={item.title}/>)}
        </ul>
      </>
    )
  }
}
export default ShowLists;