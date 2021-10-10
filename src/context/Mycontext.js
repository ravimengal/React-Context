import React, { useState } from "react";
import Appcontext from "./app-context";

const Mycontext = (props) => {
  const [auth, setAuth] = useState(true);
  return (
    <Appcontext.Provider value={(auth, setAuth, { message: "Hello from the context" })}>
      {props.children}
    </Appcontext.Provider>
  );
};

export default Mycontext;

//which ever components wrap inside Mycontext can access the data provided by the context by props.children
