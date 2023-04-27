import React from "react";
import {Component} from "react";
import {Formik} from "formik";

class SelectList extends Component {
  render() {
    return (
      <>
        <select value={this.props.selectValue} onChange={(event) => this.props.changeSelectValue(event)}>
          <option value="apply">apply</option>
          <option value="orange">orange</option>
          <option value="lemon">lemon</option>
          <option  value="banana">banana</option>
          <option value="cake">cake</option>
        </select>
      </>
    )
  }
}
export default SelectList;