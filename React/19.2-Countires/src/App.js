import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
      setData(data.map((country) => country.name));
      console.log(data);
    };
    fetch();
  }, []);

  const displayCountries = () => {
    const size = data.length;
    if (!size) return <div className="text"> Loading...</div>;
    else return data.filter((country) => country.toLowerCase().includes(term.toLowerCase())).map((country) => <li>{country}</li>);
  };

  return (
    <div className="container">
      <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
      <ul>{displayCountries()}</ul>
    </div>
  );
};

export default App;
