import React, { createContext, useState } from "react";

export const DefaultContext = createContext();

const DefaultProvider = ({ children }) => {
  const [hero, setHero] = useState([{
    poster_path: "",
  }]);

  const [playing, setPlaying] = useState([{
    poster_path: "",
    original_title: "",
    release_date: "",
  }]);

  const [popular, setPopular] = useState([{
    poster_path: "",
    original_title: "",
    release_date: "",
  }]);

  const [topRated, setTopRated] = useState([{
    poster_path: "",
    original_title: "",
    release_date: "",
  }]);

  const [upcoming, setUpcoming] = useState([{
    poster_path: "",
    original_title: "",
    release_date: "",
  }]);

  return (
    <DefaultContext.Provider
      value={{
        hero,
        setHero,
        playing,
        setPlaying,
        popular,
        setPopular,
        topRated,
        setTopRated,
        upcoming,
        setUpcoming,
      }}
    >
      {children}
    </DefaultContext.Provider>
  );
};

export default DefaultProvider;
