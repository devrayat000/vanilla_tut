import { Component } from "react";

export default class MyClassComponent extends Component {
  render() {
    return (
      <div id={this.props.id}>
        <h3>This is a class component</h3>
        {this.props.children}
        <p>Hi everyone</p>
      </div>
    );
  }
}
