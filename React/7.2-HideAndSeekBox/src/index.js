// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import Box from "./boxComponent";

// Create a react components with render!

class App extends React.Component {
  state = { isHidden: false };
  // Callback Way
  clickFunc = () => {
    this.setState((state) => ({
      isHidden: !this.state.isHidden,
    }));
  };

  // Create render!
  render() {
    console.log(this.state);
    return (
      <div className="app">
        <button onClick={this.clickFunc}>Click to Show/Hide</button>
        {this.state.isHidden ? <Box></Box> : null}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
