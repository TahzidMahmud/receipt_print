import React, { useState } from "react";

const Productform = () => {
  const [name, setName] = useState("");
  const [serial, setSerial] = useState("");
  const [warranty, setWarranty] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState("");

  return (
    <div>
      <form>
        <div className="row">
          <div className="form-group col-md-3 col-sm-12">
            <label>Product Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group col-md-2 col-sm-12">
            <label>Serial </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group col-md-2 col-sm-12">
            <label>Warranty(days)</label>
            <input type="number" className="form-control" />
          </div>
          <div className="form-group col-md-2 col-sm-12">
            <label>Price</label>
            <input type="number" className="form-control" />
          </div>
          <div className="form-group col-md-1 col-sm-12">
            <label>Quantity</label>
            <input type="number" className="form-control" />
          </div>
          <div className="form-group col-md-2 col-sm-12">
            <label>Total</label>
            <input type="number" className="form-control" />
          </div>
        </div>
        <br></br>
        <div className="form-group  col-sm-12">
          <button className="btn btn-success"> Add</button>
        </div>
      </form>
    </div>
  );
};

export default Productform;
