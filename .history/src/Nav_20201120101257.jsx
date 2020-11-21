import React from "react";
import netflix from "./image/netflixlogo.png";
import "./"

function Nav() {
  return (
    <div className="nav">
      <img src={netflix} className="nav_logo" alt="netflix_logo" />
    </div>
  );
}

export default Nav;
