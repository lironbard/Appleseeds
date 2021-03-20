// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import CustomButton from "./CustomButtons.Component";
//-----11.1 Child To Father Colors - What is the color? -----\\
// We have a parent component, that renders three CustomButton components
// which are simple buttons. Each time the user presses on one the buttons, the
// parent should show which color in the button was selected.

// We have an array of colors:
// const colors = [“blue”,”red”,”yellow”];
// 1. Create a CustomButton component.
// 2. Loop over the colors array and in every iteration render a CustomButton
// component that will take the color as a prop.
// 3. When we click on a specific button we need to send that specific color back
// to the parent which will save that color to state and display it to the DOM.

// Create a react components with render!

class App extends React.Component {
  state = { color: null };

  childClick = (childColor) => {
    this.setState({ color: childColor });
  };

  render() {
    const colors = ["blue", "red", "yellow"];
    return (
      <div>
        {colors.map((color) => {
          return (
            <div>
              <CustomButton color={color} onChildClick={this.childClick} />
            </div>
          );
        })}
        <h3>The color selected is: {this.state.color}</h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
