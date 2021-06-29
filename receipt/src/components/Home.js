import React from "react";
import Form from "./form";
import Productform from "./Productform";
import { Table } from "./Table";
const Home = () => {
  return (
    <>
      <h1 className="text-center">General Information Form</h1>
      <Form />
      <br></br>
      <Productform></Productform>
      <h2 className="text text-center">Product Table</h2>
      <hr></hr>
      <Table />
    </>
  );
};
export default Home;
