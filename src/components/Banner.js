import React, { useEffect, useState } from 'react'
import instance from '../instanceConfig';
import requests from '../request';
import './Banner.css';
function Banner() {
    const fetchData = async ()=>{
        const response = await instance.get(requests.fetchNetflixOriginals)
        const{results}=response.data
        console.log(results);

    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>Banner</div>

  )
}

export default Banner