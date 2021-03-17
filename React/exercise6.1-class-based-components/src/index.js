// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

// Create a react components

class App extends React.Component {
  render() {
    return (
      <div className="ui container comments">
        <CommentDetail link1="share" link2="explore"></CommentDetail>
        <CommentDetail link1="share" link2="explore"></CommentDetail>
        <CommentDetail link1="share" link2="explore"></CommentDetail>
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div className="ui container comments">
//       <CommentDetail link1="share" link2="explore"></CommentDetail>
//       <CommentDetail link1="share" link2="explore"></CommentDetail>
//       <CommentDetail link1="share" link2="explore"></CommentDetail>
//     </div>
//   );
// };
// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
