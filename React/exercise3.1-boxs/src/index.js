// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import Square from "./Square";

// Create a react components

const App = () => {
  return (
    <div className="ui container squares">
      <Square />
    </div>
  );
};
// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
