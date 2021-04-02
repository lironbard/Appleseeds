import React, { useState, useEffect } from "react";
import axios from "axios";

// "https://randomuser.me/api/"

const Data = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const fetch = async () => {
      try {
        const { data } = await axios.get("https://randomuser.me/api/", { cancelToken: source.token });
        setData(data.results[0]);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Canceled by the user");
        } else {
          console.log(err.message);
        }
      }
    };
    fetch();

    return () => {
      source.cancel("Canceled by the user");
    };
  }, []);
  return <div>{data && JSON.stringify(data)}</div>;
};

export default Data;
