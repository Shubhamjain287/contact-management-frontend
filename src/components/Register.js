import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const Navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  let handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      toast.error("Invalid Registeration",{theme : "dark"});
    } else {
      toast.success("Registeration Successfully",{theme : "dark"});
      Navigate("/login");
    }
  };

  return (
    <>
      <div className="f-container">
        <div className="r-box">
          <h1 className="r-h"> Register </h1>
          <form className="r-form" method="POST">
            <div className="form-group col-md-6">
              <label htmlFor="name">Enter Your Name</label>
              <input
                type="text"
                className="form-control inputs"
                id="name"
                placeholder="Name"
                autoComplete="off"
                name="name"
                value={user.name}
                onChange={handleInputs}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email">Enter Your Email</label>
              <input
                type="email"
                className="form-control inputs"
                id="email"
                placeholder="Email"
                autoComplete="off"
                name="email"
                value={user.email}
                onChange={handleInputs}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="phone">Enter Mobile phone</label>
              <input
                type="phone"
                className="form-control inputs"
                id="phone"
                placeholder="Mobile phone"
                autoComplete="off"
                name="phone"
                value={user.phone}
                onChange={handleInputs}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="work">Enter Your Profession</label>
              <input
                type="text"
                className="form-control inputs"
                id="work"
                placeholder="Profession"
                autoComplete="off"
                name="work"
                value={user.work}
                onChange={handleInputs}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="password">Enter Your Password</label>
              <input
                type="password"
                className="form-control inputs"
                id="password"
                placeholder="Password"
                autoComplete="off"
                name="password"
                value={user.password}
                onChange={handleInputs}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="cpassword">Enter Confirm Password</label>
              <input
                type="password"
                className="form-control inputs"
                id="cpassword"
                placeholder="Confirm Password"
                autoComplete="off"
                name="cpassword"
                value={user.cpassword}
                onChange={handleInputs}
              />
            </div>
            <div className="r-btn">
            <button
              type="submit"
              onClick={postData}
              name="register"
              id="register"
              className="btn btn-primary m-1 "
            >
              Register
            </button>
            </div>
          </form>
          <div className='mt-3 r-link'>
          <span> Already Have An Account ? </span>
  <NavLink to="/login" > Click Here </NavLink>
</div>
        </div>
      </div>
    </>
  );
};

export default Register;
