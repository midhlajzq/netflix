import React, { useEffect, useState } from 'react'
import instance from '../instanceConfig'
import './Row.css';


function Row({title,fetchUrl}) {
    const [movies,setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/";
    const fetchData = async ()=>{
        const response =await instance.get(fetchUrl)
        const {results}= response.data
        // console.log(results);
        setMovies(results)
        
    }
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="movies_row">
          {
            movies.map((movie)=>(
                <img className='movie' src={`${base_url}/${movie.backdrop_path}`} alt="movie image" />
            ))
          }
        </div>
    </div>

  )
}

export default Row