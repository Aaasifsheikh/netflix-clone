import React from "react";
import netflix from "./image/netflixlogo.jpeg";
import avtar from "./image/netflixavtar.jpeg";
import "./Nav.css";

function Nav() {
    useEffect(()=>{
        
    })
  return (
    <div className="nav">
      <img src={netflix} className="nav_logo" alt="netflix_logo" />
      <img src={avtar} className="nav_avtar" alt="netflix_logo" />
    </div>
  );
}

export default Nav;
