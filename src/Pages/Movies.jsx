import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "./Nav";

const Movies = () => {
    return (
        <>
          
             <div className="content__wrapp">
                 <Nav />
                 <h1>Browse our movise</h1>
                 <div className="input__wrap">
                     <input type="text" id="search" placeholder="Search by Name"  />
                     <div className="search__wrapper" >
                         <FontAwesomeIcon icon="fa-magnifying-glass" />
                     </div>
                  </div>
               
          </div>
          <section id="searc">
              <div className="md__progress--bar">
                  <div className="md__progress--bar_track"></div>
                  <div className="md__progress--bar_fill"></div>
                  <div className="md__progress--bar_buffer"></div>
              </div>
              <div className="filter justify-betwen">
                  <h2 className="search__info"><span className="black__text"> Search results:</span><span class="search_Name"> </span> </h2>
                  <select className="sort" >
                      <option disabled selected value="">Sort Movies by year</option>
                      <option value="NEW">Movie NEWest TO OLDest</option>
                      <option value="OLD">Movie OLDest TO NEWest</option>
                  </select>
               </div>
               <div className="movis">
                  <div className="content__wrapper"></div>
                  <div className="books__loading">
                      <div className="fa-spinne books__loading--spinner"><FontAwesomeIcon icon="fa-solid fa-spinner" /></div>
                  </div>
              </div>
              <div className="movies__lists">
                 <div className="movies__list"></div>
              </div>
          </section>
        </>
    
    );
}

export default Movies;