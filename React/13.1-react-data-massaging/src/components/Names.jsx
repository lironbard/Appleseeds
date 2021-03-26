import React from "react";

const Names = (props) => {
  const displayNames = () => {
    return (
      <ul className="container">
        <h3>The Names:</h3>
        {props.data.map((name, i) => {
          return (
            <div>
              <div>This is Person Number {i + 1}:</div>
              <div>{name}</div>
            </div>
          );
        })}
      </ul>
    );
  };
  console.log(props);
  return <div>{displayNames()}</div>;
};

export default Names;
