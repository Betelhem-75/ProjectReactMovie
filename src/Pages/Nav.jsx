import React, { useState} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "../Pages/Navigation";
import oops from "../asset/oops.jpg"

const Nav = () => {
    const { Title } = useParams();
    const [searchTitle, setSearchTitle] =useState(Title);
    const navigate = useNavigate();

    const onSearch = () => {
       if (searchTitle !== '') {
        navigate(`${searchTitle}`);
     } else if( searchTitle !== '[a-ZA-Z0-9]' ) {
        return (
           <div className="container">
              <Navigation />
              <imag src={oops} alt="" />
           </div> 
        )
     }
    }  

    return (
        
      <div className="container ">
            <Navigation />
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
           </div>  
       
    );
}

export default Nav;