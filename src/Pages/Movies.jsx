import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "./Nav";
import axios from "axios";
import { useLocation } from 'react-router-dom';


function useQuery() {
  return new URLSearchParams(useLocation().Nav);
}

const Movies = () => {
    const [loading, setLoading] =useState(true);
    const [movies, setMovies] =useState([]);
    const  Title = useQuery().get('q')

    async function fetchMovies() {
        const { data } =await axios.get(`https://omdbapi.com/?s=${Title}&apikey=1a73e81b`);
        setMovies(data.Search);
        setLoading(false);
    }

    useEffect(() =>{
    
     fetchMovies()   
    }, []);

    return (
        <div className="containe">
            <Nav />
            <div className="filter justify-betwen">
                <h2 className="search__info"><span className="black__text"> Search results:</span><span className="search_Name"> </span> </h2>
                <select className="sort" >
                    <option disabled  value="">Sort Movies by year</option>
                    <option value="NEW">Movie NEWest TO OLDest</option>
                    <option value="OLD">Movie OLDest TO NEWest</option>
                </select>
            </div>
            <div className="movis">
                <div className="content__wrapper"></div>
                <div className="books__loading">
                    <div className="fa-spinne books__loading--spinner">
                        <FontAwesomeIcon icon="fa-solid fa-spinner" />
                    </div>
                </div>
            </div>
            <div className="movies__lists" >
                { loading 
                    ? new Array(10).fill(0).map((_, index) => (
                        <div className="movies__list ">
                            <div className="movies__lists--container" key={index}>
                                <div className="poster-skelton skeleton"></div>
                                <div className="movie__title-skeleton skeleton"> </div>
                                <div className="movie__type-skeleton skeleton"></div>
                                <div className="movie__type-skeleton skeleton"></div>
                                <div className="movie__type-skeleton skeleton"></div>
                            </div>
                        </div>
                    )) 
                :  movies.map(movie => (
                    <div className="movies__list">
                        <div className="movies__lists--container"key={movie.imdbID} >
                            <img src={movie.Poster} className="poster" alt="" />
                            <h2 className="movie__title"> {movie.Title} </h2>
                            <p className="movie__type"><b>Year:</b> {movie.Year}</p>
                            <p className="movie__type"><b>imdbID:</b> {movie.imdbID}</p>
                            <p className="movie__type"><b>Type:</b>{} movie.Type}</p>
                        </div> 
                    </div>
                    ))
                }  
            </div>
        </div>
    );
}

export default Movies;