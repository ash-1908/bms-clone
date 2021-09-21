import React, { createContext, useState } from "react";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState({
    id: "",
    original_name: "",
    overview: "",
    poster_path: "",
    backdrop_path: "",
  });

  const [cast, setCast] = useState([{
    id: "",
    original_name: "",
    character: "",
    profile_path: ""
  }]);

  return (
    <MovieContext.Provider value={{ movie, setMovie, cast, setCast }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
