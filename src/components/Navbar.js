import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {

  const Navigate = useNavigate();
  const logoutUser = () => {
    fetch('/logout',{
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            },
        }).then((res) => {
            if(res.status!==200){
                toast.error("User Logout failed",{theme : "dark"});
                throw new Error(res.error);
            }
            else{
                toast.success("User Logout Successfully",{theme : "dark"});
                Navigate('/login');
            }
        }).catch((error) => {
            console.log(error);
        })
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand m-1" to="#">
          Contact Management 
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav p-2 ml-2">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">Register</NavLink>
            </li>
            <button className="btn btn-primary" onClick={logoutUser}> Logout </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
