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
import { act } from "@testing-library/react";

// const Data = ;
export const DataContext = React.createContext();
export const infoContext = React.createContext();

function App() {
  let products = null;
  let info = null;

  if (localStorage.getItem("products")) {
    products = JSON.parse(localStorage.getItem("products"));
  }
  if (localStorage.getItem("client")) {
    info = JSON.parse(localStorage.getItem("client"));
  } else {
    info = {};
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
        localStorage.setItem("products", JSON.stringify(action.payload));
        return action.payload;
      case "minus":
        localStorage.removeItem("products");
        state.splice(parseInt(action.payload), parseInt(1));
        localStorage.setItem("products", JSON.stringify(state));
        return [...state];
      default:
        return state;
    }
  }
  function inforeducer(state, action) {
    switch (action.type) {
      case "add":
        localStorage.setItem("client", JSON.stringify(action.payload));
        return action.payload;
      case "remove":
        localStorage.removeItem("client");
        return {};
      case "edit":
        localStorage.removeItem("client");
        return action.payload;
      default:
        return state;
    }
  }

  const [product, dispatch] = useReducer(reducer, Data);
  const [client, dispatcher] = useReducer(inforeducer, info);
  useEffect(() => {}, []);

  return (
    <div className="mh">
      <div className="container">
        <DataContext.Provider
          value={{
            State: product,
            Dispatch: dispatch,
            Client: client,
            Dispatcher: dispatcher,
          }}
        >
          {" "}
          <infoContext.Provider
            value={{
              Client: client,
              Dispatch: dispatcher,
            }}
          >
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/print" component={Printpreview} />
              </Switch>
            </Router>
          </infoContext.Provider>
        </DataContext.Provider>
      </div>
    </div>
  );
}

export default App;
