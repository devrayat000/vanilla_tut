import { Component } from "react";

export default class CountClass extends Component {
  state = {
    count: 0,
  };

  printSomething = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
          <h2>Class</h2>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.printSomething}>Increase</button>
      </div>
    );
  }
}
