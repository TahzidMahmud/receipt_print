import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";

export const Table = () => {
  const value = useContext(DataContext);
  //   const [address, setAddress] = useState(value);

  useEffect(() => {
    console.log(value);
  }, []);

  return (
    <div>
      <table className="table">
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
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>nubhj</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
