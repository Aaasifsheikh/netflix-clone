import React from "react";
import netflix from "./image/netflixlogo.png";

function Nav() {
  return (
    <div className="nav">
      <img src={netflix} className="nav_logo" alt="netFl" />
    </div>
  );
}

export default Nav;
