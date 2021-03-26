import React, { useState } from "react";
import data from "./data";
import Names from "./components/Names";
import Card from "./components/Card";
import { findByBeforeBirth, findNames } from "./dataMassaging";

function App() {
  const [nameData] = useState(findNames(data));
  const [byBirthData] = useState(findByBeforeBirth(data, 1990));

  return (
    <div>
      <Names data={nameData}></Names>
      <Card data={byBirthData}></Card>
      {/* {displayPeople()}; */}
    </div>
  );
}

export default App;
