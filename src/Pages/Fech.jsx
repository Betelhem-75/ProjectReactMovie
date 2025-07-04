import axios from "axios";


export const  fechMovies= async(Title) => {
  const { data } =await axios.get(`https://omdbapi.com/?s=${Title}&apikey=1a73e81b`);
  if (data.Response === "True") {
    return data.Search;
  } else {
    throw new Error(data.Error || "No results found");
  }

};


