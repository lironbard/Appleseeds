import React from "react";

const Square = () => {
  return (
    <div className="square1" style={{ backgroundColor: "turquoise", height: "300px", width: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="square2" style={{ backgroundColor: "lightblue", height: "250px", width: "350px", alignItems: "center", justifyContent: "center" }}>
        <div className="square3" style={{ backgroundColor: "pink", height: "200px", width: "250px", alignItems: "center", justifyContent: "space-between", marginLeft: "50px", marginTop: "25px" }}>
          <div
            className="square4"
            style={{ backgroundColor: "purple", height: "90px", width: "200px", alignItems: "center", justifyContent: "space-between", marginLeft: "30px", margin: "5px", marginTop: "30px" }}
          ></div>
          <div
            className="square4"
            style={{ backgroundColor: "purple", height: "90px", width: "200px", alignItems: "center", justifyContent: "space-between", marginLeft: "30px", margin: "5px" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Square;
