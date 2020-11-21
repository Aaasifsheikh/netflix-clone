import React, { useEffect } from "react";
import axios from "axios"

function Row({ title }) {
   

    // it run snippet of code on the basis of specific condition
  useEffect(()=>{
     async function fetchData(){
         const request = await axios
     }
  },[]);

  return (
    <div className="">
      <h2>{title}</h2>
    </div>
  );
}

export default Row;
