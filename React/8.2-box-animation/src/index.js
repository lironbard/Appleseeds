// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
//-----8.2 life cycle methods - Box Animation-----\\
// 1. We want to create a simple app: a box that slides into the screen 1 sec
// after the page loads, and then disappears from the DOM after 4 seconds.
// 2. We also want to be able to add 3 such boxes with different sizes.
// TIP - checkout css property animation, and keyframes

// Create a react components with render!

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shouldRender: false };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ shouldRender: true });
    }, 1000);
  };

  // Create render!
  render() {
    const style = {
      weight: this.props.size + "px",
      height: this.props.size + "px",
    };
    return this.state.shouldRender ? <div className="box pop-in" style={style}></div> : null;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shouldRemoveBox: false };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ shouldRemoveBox: true });
    }, 4000);
  };

  render() {
    return (
      <div>
        {this.state.shouldRemoveBox ? null : (
          <div>
            <Box />
            <Box size={200} />
            <Box size={100} />
            <Box />
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
