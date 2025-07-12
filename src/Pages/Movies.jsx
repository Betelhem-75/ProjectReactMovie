import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useParams, useLocation, Link, } from 'react-router-dom';
import whitelogo from '../asset/whitelogo.png';


function useQuery() {
  return new URLSearchParams(useLocation().Nav);
}

const Movies = () => {
    const { Title } = useParams();
    const [loading, setLoading] =useState(true);
    const [searchTitle, setSearchTitle] =useState(Title);
    const [movies, setMovies] =useState([]);
    const  title = useQuery()
    const [sortOrder, setSortOrder] = useState('NEW');
    
    function onSearch(){
        fetchMovies(searchTitle);
    }

    async function fetchMovies(Title) {
        const { data } =await axios.get(`https://omdbapi.com/?s=${Title}&apikey=1a73e81b`);
        setMovies(data.Search);
        setLoading(false);
    }

    const sortedMovies = [...movies].sort((a, b) => {
       const yearA = parseInt(a.Year);
       const yearB = parseInt(b.Year);

     return sortOrder === 'NEW' ? yearB - yearA : yearA - yearB;
     
    });

    useEffect(() =>{
    
     fetchMovies(searchTitle)   
    }, []);

    return (
        <div className="containe">
            <div className="navbar__flex flex__row">
                <div className="content__wrapper">
                    <div className="logo">
                          <img src={whitelogo} className="logo" alt="" />
                    </div>
                    <div className="links">
                        <a href="/" className="link"> Home</a>
                        <a href="Movies" className="link">Find your move</a>
                        <a href="#" className="btn__contact">CONTACT</a>
                    </div>
               </div>
           </div>
           <div className="content__wrapp">
              <h1>Browse our movise</h1>
                <div className="input__wrap">
                    <input type="text" id="search" placeholder="Search by Name" value={searchTitle} 
                        onChange={(event) => setSearchTitle(event.target.value)}
                        onKeyPress={(event) =>{
                            if (event.key === 'Enter'){
                                onSearch();
                            }
                        }}
                    />
                    <div className="search__wrapper" >
                        <FontAwesomeIcon icon="fa-magnifying-glass" onClick={() => onSearch()} />
                    </div>
                </div>
            </div>
            <div className="overlay"></div>
            <div className="movie_sction">
              <div className="filter justify-betwen">
                 <h2 className="search__info"><span className="black__text"> Search results:</span><span className="search_Name">{Title} </span> </h2>
                 <select className="sort" onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
                     <option difulte  value="">Sort Movies by year</option>
                     <option value="NEW">Movie NEWest TO OLDest</option>
                     <option value="OLD">Movie OLDest TO NEWest</option>
                 </select>
              </div>
              <div className="movies__lists" >
                 { loading 
                     ? new Array(10).fill(0).map((_, index) => (
                         <div className="movies__list " key={index}>
                             <div className="movies__lists--container" key={index}>
                                 <div className="poster-skelton skeleton"></div>
                                 <div className="movie__title-skeleton skeleton"> </div>
                                 <div className="movie__type-skeleton skeleton"></div>
                                 <div className="movie__type-skeleton skeleton"></div>
                                 <div className="movie__type-skeleton skeleton"></div>
                              </div>
                          </div>
                       )) 
                  :  sortedMovies.slice(0, 6).map(movie => (
                        <div className="movies__list" >
                            <Link key={movie.imdbID} to={`/Movies/${movie.imdbID}`}>
                              <div className="movies__lists--container"key={movie.imdbID} >
                                 <img src={movie.Poster} className="poster" alt="" />
                                 <h2 className="movie__title"> {movie.Title} </h2>
                                 <p className="movie__type"><b>Year:</b> {movie.Year}</p>
                              </div> 
                          </Link>
                      </div>
                      ))
                   }  
              </div>
          </div>
        </div>  
    );
}

export default Movies;