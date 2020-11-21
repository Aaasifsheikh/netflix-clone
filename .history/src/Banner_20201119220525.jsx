import React,{useEffect} from 'react'
import axios from "./axios";
import requests from "./request";


function Banner() {

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requess)
        }

    },[])
    return (
        <header>
            
        </header>
    )
}

export default Banner
