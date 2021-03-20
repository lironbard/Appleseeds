import React from "react";

const CustomButton = ({ color, onChildClick }) => {
  const click = (clickedColor) => {
    onChildClick(clickedColor);
  };
  return (
    <button onClick={() => click(color)} style={{ background: color }}>
      {color}
    </button>
  );
};

export default CustomButton;
