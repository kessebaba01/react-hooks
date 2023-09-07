import React, { useEffect, useState } from "react";
import axios from "axios";

function UseEffects() {
  const [data, setData] = useState("");
  const [counter, setCounter] = useState(0)

  function btnIncrement() {
    setCounter(prevCounter => prevCounter + 1)
}

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email)
        console.log("API CALLED");
      });
  }, [counter]);

  return <div>{data}<br />

{counter}<br /><br />
        <button onClick={btnIncrement}>Increase Counter</button><br /><br />
        
  
  </div>;
}

export default UseEffects;
