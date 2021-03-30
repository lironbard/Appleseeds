import React, { useState, useEffect } from "react";
import axios from "axios";

const Movie = () => {
  const [term, setTerm] = useState("star wars");
  //const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://swapi.dev/api/films/1", {});

      setTerm(data.films.results);
    };

    if (term) {
      search();
    }
  }, [term]);

  //   const renderedResults = results.map((result) => {
  //     return (
  //       <div key={results.episode_id} className="item">
  //         <div className="right floated content"></div>
  //         <div className="content">
  //           <div className="header">{result.titles}</div>
  //         </div>
  //       </div>
  //     );
  //   });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <lable>Enter Search Term</lable>
          <input
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            className="input"
          ></input>
        </div>
      </div>
      {/* <div className="ui celled list">{renderedResults}</div> */}
    </div>
  );
};

export default Movie;
