import React from "react";
import whitelogo from '../asset/whitelogo.png';
import { Link } from "react-router-dom";

const Navigation=() => {
    return (
        <div className="navbar__flex flex__row">
            <div className="content__wrapper">
                <div className="logo">
                    <img src={whitelogo} className="logo" alt="" />
                </div>
                <div className="links">
                    <Link to="/" className="link"> Home</Link>
                    <Link to="Movies" className="link">Find your move</Link>
                    <Link to="#" className="btn__contact">CONTACT</Link>
                </div>
            </div>
        </div>
    );
}

export default Navigation;