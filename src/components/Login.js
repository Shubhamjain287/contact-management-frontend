import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      toast.error("Invalid Credentials !!",{theme : "dark"});
    } else {
      toast.success("Login Succesfully !!",{theme : "dark"});
      Navigate("/");
    }
  };

  return (
    <>
      <div className="l-container">
        <div className="l-box">
          <h1 className="login-h"> Login </h1>
          <form className="l-form" method="POST">
            <div className="form-group inputs col-md-6">
              <label htmlFor="email">Enter Your Email</label>
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
            <div className="form-group inputs col-md-6">
              <label htmlFor="password">Enter Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                name="password"
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
              onClick={loginUser}
            >
              Login
            </button>
            </div>
          </form>
          <div className="mt-3 l-account">
            <span>  Not a Member  </span>
            <NavLink to="/register"> Create Account </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
