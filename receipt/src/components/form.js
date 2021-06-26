import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Customer Name</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter Customer Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Customer Address</label>
        <input
          value={address}
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          placeholder="Enter Customer Address"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Customer Phone</label>
        <input
          value={phone}
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          placeholder="Enter Customer Phone"
        />
      </div>
      <br></br>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
