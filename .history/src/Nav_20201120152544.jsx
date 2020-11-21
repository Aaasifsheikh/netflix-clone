import React, { useState, useEffect } from "react";
import netflix from "./image/netflixlogo.jpeg";
import avatar from "./image/netflixavtar.jpeg";
import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <NavLink to="/">
        <img src={netflix} className="nav_logo" alt="netflix_logo" />
      </NavLink>
      <img src={avatar} className="nav_avatar" alt="netflix_logo" />
    </div>
  );
}

export default Nav;
