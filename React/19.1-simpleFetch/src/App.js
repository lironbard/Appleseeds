import React, { useEffect, useState } from "react";
import axios from "axios";
// import Movie from "./components/Movie.component";
const App = () => {
  const [data, setData] = useState({ title: "xxx", director: "yyy" });
  // const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("https:swapi.dev/api/films/1/");
      setData({ title: response.data.title, director: response.data.director });
      //setData({ title: response.data.title, director: response.data.director });
      console.log(response.data.title);
    };
    fetch();
  }, []);

  return (
    <div className="container">
      <div>Movie:{data.title}</div>
      <div>Director:{data.director}</div>
      {/* <button onClick={() => setCounter(counter + 1)}>click</button> */}
    </div>
  );
};

export default App;
