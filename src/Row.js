import React, { useEffect, useState } from 'react'
import axios from './axios';
import "./Row.css"
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original";
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, SetMovies] = useState([]);
    const[trailerUrl,setTrailerUrl]=useState("");

    useEffect(() => {
        async function fetchdata() {
            const request = await axios.get(fetchUrl);
            SetMovies(request.data.results);
            return request;
        }
        fetchdata();
    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }
    const handleClick = (movie) => {
        if (trailerUrl) {
          setTrailerUrl('');
        } else {
          movieTrailer(movie?.name || "")
            .then((url) => {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        }
      };
      
        return (
            <div className='row'>

                <h2>{title}</h2>
                <div className='row_posters'>
                    {movies.map((movie) => {
                        return <img
                            key={movie.id}
                            onClick={() => handleClick(movie)}
                            className={` ${isLargeRow ? "row_posterlarge" : "row_poster"} `}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name} />
                    })}
                </div>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

            </div>
        )
    }

    export default Row