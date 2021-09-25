import React  from "react";
import  Appcontext  from './app-context';

const Mycontext = (props) => {
  return (
    <Appcontext.Provider value={{ message: "Hello from the context" }}>
      {props.children}
    </Appcontext.Provider>
  );
};

export default Mycontext;

//which ever components wrap inside Mycontext can access the data provided by the context by props.children
