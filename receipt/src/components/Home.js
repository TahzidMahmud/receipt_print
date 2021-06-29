import React, { useContext } from "react";
import Form from "./form";
import Productform from "./Productform";
import { Table } from "./Table";
import { DataContext } from "../App";
const Home = () => {
  const context = useContext(DataContext);
  return (
    <>
      <h1 className="text-center">General Information Form</h1>
      <Form />
      <br></br>
      <Productform></Productform>
      <div className="row">
        <h2 className="text text-center col-md-10 col-sm-10">Product Table</h2>
        {context.State.length > 0 ? (
          <button
            className="btn btn-danger col-md-2 col-sm-2"
            onClick={() => {
              console.log("hit");
              localStorage.removeItem("products");
              window.location.reload();
            }}
          >
            Clear Table
          </button>
        ) : (
          <></>
        )}
      </div>

      <hr></hr>
      <Table />
    </>
  );
};
export default Home;
