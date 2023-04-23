import React, {Component} from 'react';

class FirstFn extends Component {
  render() {
    return (
      <div>
        {this.props.text}
        <div>test</div>
      </div>
    );
  }
}

export default FirstFn;
