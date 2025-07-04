import React, { useState} from "react";
import whitelogo from '../asset/whitelogo.png';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
    const { Title } = useParams();
    const [searchTitle, setSearchTitle] =useState(Title);
    const navigate = useNavigate();

    const onSearch = () => {
       if (searchTitle !== '') {
        navigate(`${searchTitle}`);
     
    }
    }  

    return (
        <div className="container">
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
        </div>          
    );
}

export default Nav;