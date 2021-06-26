/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import Form from "./components/form";
import Productform from "./components/Productform";

import "./App.css";
import "./bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">General Information Form</h1>
        <Form />
        <br></br>
        <Productform></Productform>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
