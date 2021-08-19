import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../App";
import { infoContext } from "../App";

const Printpreview = () => {
  const products = useContext(DataContext);
  const client = useContext(infoContext);
  const [subtotal, setsubtotal] = useState(0);
  const [discount, setdiscount] = useState(0);
  const [shipping, setshipping] = useState(0);
  const [due, setdue] = useState(0);

  useEffect(() => {
    let temp = 0;
    products.State.forEach((element) => {
      temp = element.total + subtotal;
    });
    setsubtotal(temp);
  }, []);

  return (
    <div className="container">
      <br></br>
      <div className="d-flex flex-end">
        <div className="col-md-6 col-sm-12 wid"></div>
        <div className="col-md-6 col-sm-12">
          <h3>
            <b>
              <u>INVOICE</u>
            </b>
          </h3>
          <table className="table table-bordered" style="height:50vh;">
            <thead className="thead-dark clr">
              <tr>
                <th scope="col">INVOICE NO</th>
                <th scope="col">DATE</th>
              </tr>
            </thead>
            <tbody className="tbl">
              <tr>
                <td>
                  {Math.floor(100000 + Math.random() * 900000) +
                    "-" +
                    new Date().toLocaleString().substring(11, 19)}
                </td>
                <td>{new Date().toLocaleString().substring(0, 9)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h5>
          <u>
            <b>Billed To</b>
          </u>
        </h5>
        <p>Name: {client.Client.name}</p>
        <p>Address: {client.Client.address}</p>
        <p>Phone: {client.Client.phone}</p>
      </div>
      <br></br>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
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
        <br></br>
        <div className="d-flex flex-end">
          <div className="col-md-6 col-sm-12 widd"></div>
          <div className="col-md-6 col-sm-12">
            <table className="table table-bordered">
              <tbody className="tbl">
                <tr>
                  <td colSpan="2">Subtotal</td>
                  <td>{subtotal}</td>
                </tr>
                <tr>
                  <td colSpan="2">Discount</td>
                  <td>
                    <input
                      className="no-outline"
                      type="number"
                      value={discount}
                      onChange={(e) => {
                        setdiscount(e.target.value);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">Shipping & handling</td>
                  <td>
                    <input
                      className="no-outline"
                      type="number"
                      value={shipping}
                      onChange={(e) => {
                        setshipping(e.target.value);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">Due</td>
                  <td>
                    <input
                      className="no-outline"
                      type="number"
                      value={due}
                      onChange={(e) => {
                        setdue(e.target.value);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">Grand Total</td>
                  <td>{subtotal - discount + shipping - due}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br></br>
        <div className="d-flex justify-content-between">
          <div className="col-md-6 col-sm-6">
            <b>
              <u>Receiver signature</u>
            </b>
          </div>
          <div className="col-md-6 col-sm-6 text-end">
            <b>
              <u>Authorized Signature</u>
            </b>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="">
          <h5>
            <b>
              <u>Terms</u>
            </b>
          </h5>
          <p>
            1. Goods once sold, cannot be refunded. <br></br> 2. Price of the
            products may change overtime. <br></br>3. No warranty will be given
            for burn, broken or any kind of physical damage.
          </p>
        </div>
        <h5 className="text text-center">
          <b>
            <u>Contact us</u>
          </b>
        </h5>
        <p>
          Phone: 01797339863, 01970339863<br></br>
          Facebook:{" "}
          <a href="https://www.facebook.com/supremetechbd">
            https://www.facebook.com/supremetechbd
          </a>
          <br></br>
          Mail: tamjid653@gmail.com
        </p>
      </div>
      <button
        id="print"
        className="btn btn-primary"
        onClick={() => {
          document.getElementById("print").style.display = "none";
          window.print();
          document.getElementById("print").style.display = "block";
        }}
      >
        Print
      </button>
    </div>
  );
};
export default Printpreview;
