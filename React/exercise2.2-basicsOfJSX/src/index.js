// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react components
const data = ["hello", " ", "world"];
const number1 = 5;
const number2 = 6;

const addFunction = (num1, num2) => {
  const res = num1 + num2;
  return String(res);
};

const stringLength = (string) => {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    counter += 1;
  }
  return counter;
};

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
      <button style={{ backgroundColor: "blue", color: "white" }}>{data}</button>
      <h1>{addFunction(number1, number2)}</h1>
      <h1>The string’s length is: {stringLength("lama")}</h1>
    </div>
  );
};
// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

// Learn first online on how to use string interpolation in React. Then answer
// the questions below.
// Create some JSX with the following variables:
// 1. const data = ["hello", "world"];
// the output should be: “Hello World”
// notice the spacing!
// 2.
// const number1 = 5;
// const number2 =6;
// the output should be: 5 + 6 = 11
// 3.
// const string = “I love React!”
// the output should be : The string’s length is <display the length of the string>
