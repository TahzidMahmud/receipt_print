/* eslint-disable jsx-a11y/heading-has-content */
import React, { useReducer, useEffect, useState } from "react";
import Form from "./components/form";
import Productform from "./components/Productform";
import { Table } from "./components/Table";

import "./App.css";
import "./bootstrap.css";

// const Data = ;
export const DataContext = React.createContext();

function App() {
  let products = null;
  if (localStorage.getItem("products")) {
    products = JSON.parse(localStorage.getItem("products"));
  }

  let newarr = [];
  if (products != null) {
    newarr = products;
  } else {
    newarr = [];
  }
  const [Data, setData] = useState(newarr);

  function reducer(state, action) {
    switch (action.type) {
      case "add":
        console.log(Data);
        localStorage.setItem("products", JSON.stringify(action.payload));
        return action.payload;
      default:
        return Data;
    }
  }
  const [product, dispatch] = useReducer(reducer, Data);
  useEffect(() => {}, []);

  return (
    <div className="App">
      <div className="container">
        <DataContext.Provider value={{ State: product, Dispatch: dispatch }}>
          <h1 className="text-center">General Information Form</h1>
          <Form value={{ State: product, Dispatch: dispatch }} />
          <br></br>
          <Productform></Productform>
          <h2 className="text text-center">Product Table</h2>
          <hr></hr>
          <Table />
        </DataContext.Provider>
      </div>
    </div>
  );
}

export default App;
