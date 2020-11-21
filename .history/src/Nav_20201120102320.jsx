import React from "react";
import netflix from "./image/netflixlogo.jpeg";
import avtar from "./image/";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <img src={netflix} className="nav_logo" alt="netflix_logo" />
      <img src={netflix} className="nav_logo" alt="netflix_logo" />
    </div>
  );
}

export default Nav;
