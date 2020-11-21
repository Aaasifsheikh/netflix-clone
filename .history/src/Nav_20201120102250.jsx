import React from "react";
import netflix from "./image/netflixl";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <img src={netflix} className="nav_logo" alt="netflix_logo" />
    </div>
  );
}

export default Nav;
