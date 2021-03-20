// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//-----8.1 life cycle methods-----\\
// 1. Create an initial state in a component with a key called
// “favoriteColor” and its value some color string.

// 2. In your JSX create an h1 element that will display your
// favorite color coming from state.
// e.g. “My favorite color is blue”

// 3.In your JSX create an empty div with an id attribute.

// 4. Just when the component mounts to the screen call the
// appropriate life cycle method that will create a setTimeout
// function that will be invoked after 1 second.
// Inside your setTimeout function change the state’s value of
// your favoriteColor to some other color.

// 5. Call the life cycle method that will be invoked when the
// state changes in your component.
// inside this life cycle method select the empty DOM element
// and insert the text “The updated favorite color is” and
// attach the new value you get from state.

// Create a react components with render!

class App extends React.Component {
  state = { favoriteColor: "red" };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ favoriteColor: "blue" });
    }, 1000);
  };

  componentDidUpdate = () => {
    document.querySelector("#theDiv").innerHTML = "The new Fav Color is:" + this.state.favoriteColor;
  };

  // Create render!
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <div id="theDiv"></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
