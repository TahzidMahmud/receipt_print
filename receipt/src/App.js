/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import Form from "./components/form";
import Productform from "./components/Productform";
import { Table } from "./components/Table";

import "./App.css";
import "./bootstrap.css";

const Data = {
  customer: {},
  products: [],
};
export const DataContext = React.createContext(Data);

function App() {
  return (
    <div className="App">
      <div className="container">
        <DataContext.Provider value={Data}>
          <h1 className="text-center">General Information Form</h1>
          <Form />
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
