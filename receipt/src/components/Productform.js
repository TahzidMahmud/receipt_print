import React, { useState, useEffect } from "react";

const Productform = () => {
  const [name, setName] = useState("");
  const [serial, setSerial] = useState("");
  const [warranty, setWarranty] = useState(0);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(price * quantity);
  }, [price, quantity]);
  const handleProduct = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "products",
      JSON.stringify({
        name: name,
        serial: serial,
        warrenty: warranty,
        price: price,
        quantity: quantity,
        total: total,
      })
    );
  };
  return (
    <div>
      <form onSubmit={handleProduct}>
        <div className="row">
          <div className="form-group col-md-3 col-sm-12">
            <label>Product Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <div className="form-group col-md-2 col-sm-12">
            <label>Serial </label>
            <input
              type="text"
              value={serial}
              onChange={(e) => {
                setSerial(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <div className="form-group col-md-2 col-sm-12">
            <label>Warranty(days)</label>
            <input
              type="number"
              value={warranty}
              onChange={(e) => {
                setWarranty(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <div className="form-group col-md-2 col-sm-12">
            <label>Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <div className="form-group col-md-1 col-sm-12">
            <label>Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <div className="form-group col-md-2 col-sm-12">
            <label>Total</label>
            <input
              type="number"
              value={total}
              className="form-control"
              readOnly
            />
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
