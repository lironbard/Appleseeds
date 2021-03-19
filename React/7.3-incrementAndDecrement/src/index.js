// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//-----7.3-----\\
// We want to create two buttons and one label.
// First button will increment the counter.
// Second button will decrement the counter
// A label that displays the current value.
// The counter range can only be from -10 to 10.
// If the counter is negative the label will be a red color.
// If the counter is positive the label will be a green color.
// If the counter is 0 the label will be a black color.

// Create a react components with render!

class App extends React.Component {
  state = { count: 0, color: "black" };

  increment = () => {
    if (this.state.count < 10) {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    }
  };

  decrement = () => {
    if (this.state.count > -10) {
      this.setState((prevState) => {
        return { count: prevState.count - 1 };
      });
    }
  };

  // Create render!
  render() {
    const colors = () => {
      if (Math.sign(this.state.count) > 0) {
        return "green";
      } else if (Math.sign(this.state.count) < 0) {
        return "red";
      } else {
        return "black";
      }
    };

    return (
      <div style={{ padding: 50 }}>
        <input type="button" value="+" onClick={this.increment} />
        <label style={{ color: colors() }}>{this.state.count}</label>
        <input type="button" value="-" onClick={this.decrement} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
