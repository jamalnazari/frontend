import React, { useState } from "react";
import Axios from "axios";

function Api2() {
  const [data, setData] = useState("");

  const ren = (qw) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${qw}/`)
      .then((res) => setData(res.data[0].excuse))
      .catch((err) => console.error("Error fetching excuse:", err));
  };

  return (
    <div className="App">
      <button onClick={() => ren("party")}>Party</button>
      <button onClick={() => ren("family")}>Family</button>
      <button onClick={() => ren("office")}>Office</button>

      <p>{data}</p>
    </div>
  );
}

export default Api2;