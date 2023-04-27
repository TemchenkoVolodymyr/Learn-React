import React from "react";
import {Component} from "react";

class Textarea extends Component{
  render() {
    return (
      <>
        <form  onSubmit={(event) => this.props.preventDefaultTextAreaValue(event)}>
            <textarea value={this.props.textareaValue} onChange={(event) => this.props.changeTextAreaValue(event)}>
            </textarea>
<input type="submit" value="Send"/>

        </form>
      </>
    )
  }
}
export default Textarea;