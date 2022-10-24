import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {

  const Navigate = useNavigate();
  
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const SubmitContact = async (e) => {
    e.preventDefault();
    const res = await fetch("/addcontacts",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        name,number,email
      })
    });

  const data = res.json();
  
  if(res.status===400 || !data){
    toast.error("Unable to Save Contact !!",{theme: "dark",});
  } else {
    toast.success("Contact Save Successfully !!",{theme: "dark",});
    Navigate("/contacts");
    }
  };

  return (
    <>
      <div className="l-container">
        <div className="l-box">
          <h1 className="login-h"> Add New Contact </h1>
          <form className="l-form" method="POST">
          <div className="form-group inputs col-md-6">
              <label htmlFor="name">Enter Name</label>
              <input
                type="name"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                name="name"
                autoComplete="off"
              />
            </div>
          <div className="form-group inputs col-md-6">
              <label htmlFor="number">Enter Number</label>
              <input
                type="number"
                className="form-control"
                id="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Number"
                name="number"
                autoComplete="off"
              />
            </div>
            <div className="form-group inputs col-md-6">
              <label htmlFor="email">Enter Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                name="email"
                autoComplete="off"
              />
            </div>
            <div className="l-btn">
            <button
              type="submit"
              name="login"
              id="login"
              value="Log in"
              className="btn btn-primary m-1"
              onClick={SubmitContact}
            >
              Save
            </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddContact;