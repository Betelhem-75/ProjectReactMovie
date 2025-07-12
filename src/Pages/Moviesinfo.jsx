import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navigation from "./Navigation";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Moviesinfo = () => {
   const { imdbID } = useParams();
   const [movie, setMovie] = useState(null);
   const [loading, setLoading] =useState(true);

   useEffect(() => {
    async function fetchMovie() {
      const res = await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=1a73e81b`);
      if (res.data.Response === 'True') {
        setMovie(res.data);
        setLoading(true);
      }
    }
     fetchMovie();
    }, [imdbID]);
    if (!movie) return <FontAwesomeIcon icon={faSpinner} />;
    return (
       <div>
          <Navigation />
          <div className="movie__selected--top">
                 <Link to="/Movies" className="movie__link movie__selected--link" >
                 <FontAwesomeIcon icon='arrow-left'  /> <b>Movies</b>
                 </Link>
                 <Link to="/Movies" className="movie__link" ></Link>
            </div> 
            <div className="movie__selected">
                <figure className="movie__selected--figure">
                      <img src={movie.Poster} alt="" className="movie_selected--img " />
                </figure>
                <div className="container__movie--selected">
                    <h2 className="movie__selected--title movie__selected--link">{movie.Title}</h2>
                    <p className="movie__type movie__selected--link"><b>Year:</b> {movie.Year}</p>
                    <p className="movie__type movie__selected--link"><b>Type:</b> {movie.Type}</p>
                    <p className="movie__type movie__selected--link"><b>imdbID:</b> {movie.imdbID}</p>
                </div>
            </div>  
       </div> 
    );
}

export default Moviesinfo;