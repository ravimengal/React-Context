import React, { createContext } from "react";
import "./App.css";
import Theme from "./context/Theme";

export const Mycontext = React.createContext();

function App() {
  return (
    <>
    <Mycontext.Provider value={'ravi'}>
      <Theme />
      </Mycontext.Provider>
    </>
  );
}

export default App;
