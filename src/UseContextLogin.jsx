import React, { useContext } from "react";
import { AppContext } from "./UseContext";

function UseContextLogin() {
    const {setUsername} = useContext(AppContext)

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
}

export default UseContextLogin;
