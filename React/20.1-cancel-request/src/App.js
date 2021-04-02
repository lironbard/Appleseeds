import React, { useState } from "react";
import axios from "axios";
import Data from "./components/Data.component";

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle((toggle) => !toggle)}>{toggle ? "Hide Data" : "Show Data"}</button>
      {toggle && <Data />}
    </div>
  );
};

export default App;
