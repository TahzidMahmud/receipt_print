import React, { useContext, useEffect } from "react";
import { DataContext } from "../App";

export const Table = () => {
  const context = useContext(DataContext);
  //   const [address, setAddress] = useState(value);

  useEffect(() => {
    // console.log(value);
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
          {context.State.map((product, index) => {
            const { name, price, quantity, serial, total, warrenty } = product;
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
  );
};
