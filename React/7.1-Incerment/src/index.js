// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react components with render!

class App extends React.Component {
  state = { counter: 0 };
  // Callback Way
  clickFunc = () => {
    // this.setState({ counter: this.state.counter + 1 }, () => {
    //   //console.log(this.state.counter);
    // });
    this.setState((prevState) => {
      console.log(prevState);
      return { counter: prevState.counter + 1 };
    });
  };

  // ASYNC Way
  // clickFunc = async () => {
  //   await this.setState({ counter: this.state.counter + 1 });
  //   console.log(this.state);
  // };
  // Create render!
  render() {
    return (
      <div>
        <button onClick={this.clickFunc}>The Click</button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
