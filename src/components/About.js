import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const Navigate = useNavigate();
  const [user, setUserData] = useState({});

  const AboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        creditentials: "include",
      });

      const data = await res.json();
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      Navigate("/login");
    }
  };

  useEffect(() => {
    AboutPage();
  },[]);

  return (
    <>
      <div className="a-container">
        <div className="a-box">
          <div className="a-h">
            <h1> Profile </h1>
          </div>
          <div className="a-details">
            <div className="a-name">
              <h3>
                Name - <span> {user.name} </span>
              </h3>
            </div>
            <div className="a-email">
              <h3>
                Email - <span> {user.email} </span>
              </h3>
            </div>
            <div className="a-name">
              <h3>
                Phone - <span> {user.phone} </span>
              </h3>
            </div>
            <div className="a-work">
              <h3>
                Work - <span> {user.work} </span>
              </h3>
            </div>
          </div>
          <div className="a-btn">
            <button
              type="submit"
              name="login"
              id="Edit"
              value="Log in"
              className="btn btn-primary m-1"
            >
              Edit Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
