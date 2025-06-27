import React from "react";
import whitelogo from '../asset/whitelogo.png';

const Nav = () => {
    return (
        
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
                  
    );
}

export default Nav;