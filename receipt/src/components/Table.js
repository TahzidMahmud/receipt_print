import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";

export const Table = () => {
  const context = useContext(DataContext);
  //   const [address, setAddress] = useState(value);

  useEffect(() => {}, []);

  return (
    <>
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
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Sr</th>
              <th scope="col">Product name</th>
              <th scope="col">Serial No</th>
              <th scope="col">Warranty(Days)</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="tbl">
            {context.State.map((product, index) => {
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
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        context.Dispatch({
                          type: "minus",
                          payload: parseInt(index),
                        });
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <br></br>
      <div className="row">
        <div className="col-md-4 col-sm-4"></div>
        <div className="col-md-4 col-sm-4"></div>
        <div className="col-md-4 col-sm-4 d-flex flex-row-reverse ">
          <Link to="/print">
            <button className="btn btn-lg btn-info text-light ">Proceed</button>
          </Link>
        </div>
      </div>
      <br></br>
    </>
  );
};
