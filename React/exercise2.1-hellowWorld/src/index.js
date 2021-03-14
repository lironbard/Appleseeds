// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react components
const domContainer = document.querySelector("#root");
const buttonText = "Click!";
const App = () => {
  return (
    <div>
      <lable htmlFor="name" className="label">
        Enter Name
      </lable>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>{buttonText}</button>
    </div>
  );
};
// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
