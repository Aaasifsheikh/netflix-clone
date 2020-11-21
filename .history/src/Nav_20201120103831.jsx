import React, { useState } from "react";
import netflix from "./image/netflixlogo.jpeg";
import avtar from "./image/netflixavtar.jpeg";
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
    <div className={`nav ${show && "nav_black}>
      <img src={netflix} className="nav_logo" alt="netflix_logo" />
      <img src={avtar} className="nav_avtar" alt="netflix_logo" />
    </div>
  );
}

export default Nav;
