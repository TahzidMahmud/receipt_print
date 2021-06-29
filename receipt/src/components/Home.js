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

      <Table />
    </>
  );
};
export default Home;
