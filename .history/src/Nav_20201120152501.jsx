import React, { useState, useEffect } from "react";
import netflix from "./image/netflixlogo.jpeg";
import avatar from "./image/netflixavtar.jpeg";
import "./Nav.css";

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
    <Nav
      <img src={netflix} className="nav_logo" alt="netflix_logo" />
      <img src={avatar} className="nav_avatar" alt="netflix_logo" />
    </div>
  );
}

export default Nav;
