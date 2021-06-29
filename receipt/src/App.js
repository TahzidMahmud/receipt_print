/* eslint-disable jsx-a11y/heading-has-content */
import React, { useReducer, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Form from "./components/form";
// import Productform from "./components/Productform";
// import { Table } from "./components/Table";
import Home from "./components/Home";
import Printpreview from "./components/Printpreview";

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
    <div className="mh">
      <div className="container">
        <DataContext.Provider value={{ State: product, Dispatch: dispatch }}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/print" component={Printpreview} />
            </Switch>
          </Router>
        </DataContext.Provider>
      </div>
    </div>
  );
}

export default App;
