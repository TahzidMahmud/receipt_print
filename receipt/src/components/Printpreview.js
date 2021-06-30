import React, { useContext, useEffect } from "react";
import { DataContext } from "../App";
import { infoContext } from "../App";

const Printpreview = () => {
  const products = useContext(DataContext);
  const client = useContext(infoContext);
  return (
    <div>
      <div className="row">
        <h2 className="text text-center col-md-10 col-sm-10">Product Table</h2>
      </div>
      <hr></hr>
      <div className="table-responsive">
        <table className="table table-bodered table-hover">
          <thead>
            <tr>
              <th scope="col">Sr</th>
              <th scope="col">Product name</th>
              <th scope="col">Serial No</th>
              <th scope="col">Warranty(Days)</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody className="tbl">
            {products.State.map((product, index) => {
              const { name, price, quantity, serial, total, warrenty } =
                product;
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{serial}</td>
                  <td>{warrenty}</td>
                  <td>{price}</td>
                  <td>{quantity}</td>
                  <td>{total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button
        id="print"
        className="btn btn-primary"
        onClick={() => {
          document.getElementById("print").style.display = "none";
          window.print();
        }}
      >
        Print
      </button>
    </div>
  );
};
export default Printpreview;
