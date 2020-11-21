import React,{useEffect} from 'react'
import axios from "./axios";
import request from "./request";


function Banner() {

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(reques)
        }

    },[])
    return (
        <header>
            
        </header>
    )
}

export default Banner
