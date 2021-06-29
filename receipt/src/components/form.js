import React, { useState, useContext, useEffect } from "react";
import { infoContext } from "../App";

const Form = () => {
  const context = useContext(infoContext);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmition = (e) => {
    e.preventDefault();
    context.Dispatch({
      type: "add",
      payload: {
        name: name,
        address: address,
        phone: phone,
      },
    });
    setName("");
    setAddress("");
    setPhone("");
  };
  useEffect(() => {
    if (context.Client.type) {
      setName(context.Client.name);
      setAddress(context.Client.address);
      setPhone(context.Client.phone);
    }
  }, [context]);

  return (
    <>
      {context.Client.name && !context.Client.type ? (
        <>
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-md-10 col-sm-10">
                  <h3 className="text text-center">
                    Client: {context.Client.name}
                  </h3>
                </div>
                <div className="col-md-2 col-sm-2">
                  <button
                    className="btn btn-danger "
                    onClick={() => {
                      context.Dispatch({
                        type: "remove",
                        payload: "",
                      });
                    }}
                  >
                    clear
                  </button>
                  <button
                    className="btn btn-warning m-2"
                    onClick={() => {
                      context.Dispatch({
                        type: "edit",
                        payload: {
                          name: context.Client.name,
                          address: context.Client.address,
                          phone: context.Client.phone,
                          type: "edit",
                        },
                      });
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h6>
                <span>
                  <b>Address: </b>
                </span>
                {context.Client.address}
              </h6>
              <h6>
                <span>
                  <b>Phone: </b>
                </span>
                {context.Client.phone}
              </h6>
            </div>
          </div>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmition}>
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
              {context.Client.type ? "Update" : "Submit"}
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default Form;
