// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
//-----8.3 life cycle methods - Changing Box-----\\
// 1. We want to create a simple app: a box that changes
// color every half a second.
// 2. Let’s change the box to a circle after 5 color changes.

// Create a react components with render!

class Box extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={this.props.style}></div>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.colors = ["blue", "green", "red", "orange"];
    this.state = {
      colorIndex: 0,
      circle: false,
      renderChild: true,
    };
  }

  updateColor() {
    const newIndex = this.state.colorIndex + 1;
    this.setState({ colorIndex: newIndex });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.colorIndex >= 6 && !prevState.circle) {
      this.setState({ circle: true });
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.updateColor.bind(this), 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let style = this.colors[this.state.colorIndex % this.colors.length];
    style += this.state.circle ? "circle" : "";
    return (
      <div>
        <Box style={style}></Box>
      </div>
    );
  }
}

function rendering() {
  ReactDOM.render(<App />, document.querySelector("#root"));
}

rendering();
