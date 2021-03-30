import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");
  const [search, setSearch] = useState("sleep");

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(`https://hn.algolia.com/api/v1/search?query=${search}`);
      setData(data.hits);
      console.log(data);
    };
    fetch();
  }, [search]);

  return (
    <div>
      <input type="text" value={term} onChange={(event) => setTerm(event.target.value)} />
      <button onClick={() => setSearch(term)}>Search</button>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
