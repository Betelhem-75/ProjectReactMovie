import React from "react";
import Nav from "./Nav";
import moviePic from '../asset/moviePic.PNG'

const Home = () => {
    return(
      <>
        <Nav />
        <img src={moviePic} className="moviePic" alt=""/>
      </>
    );
}

export default Home;