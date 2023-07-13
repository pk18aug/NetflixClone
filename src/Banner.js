import React, { useEffect, useState } from 'react'
import axios from './axios';
import requests from './request';
import "./Banner.css"
function Banner() {
    const [movie, SetMovie] = useState([]);

    useEffect(() => {
        async function fetchdata() {
            const request = await axios.get(requests.fetchNetflixOriginals);

            SetMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        }
        fetchdata();

    }, [])
    console.log(movie);
    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}>
            <div className='banner_contents'>
                <h1 className='banner_title'>
                    {/* as the data is not consistent for apis that'y 
    we are doing like this so that we can get atleast 
    get one value */}
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                {/* title */}
                <div className='banner_buttons'>
                    <button className='banner_button' >Play</button>
                    <button className='banner_button' >My List</button>
                </div>
                {/* 2 buttons */}
                <h1 className='banner_description'>{movie?.overview}</h1>
                {/* desciption */}

            </div>
            <div className='banner--fadebottom'/>
        </header>
    )
}

export default Banner 