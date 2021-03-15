// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import MyComponent from "./MyComponent";

// Create a react components
const MyComponent1 = () => {
  const buttonText2 = "Not Important!";
  return <button style={{ backgroundColor: "blue", color: "white" }}>{buttonText2}</button>;
};
//const domContainer = document.querySelector("#root");
const buttonText = "Click!";
const App = () => {
  return (
    <div className="ui container squares">
      <MyComponent1 />
      <MyComponent />
    </div>
  );
};
// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

// Create a button component.
// Render 2x the button component and make the 1st button with the text
// “Important” and bold. Make the 2nd button with the text “Not Important”
