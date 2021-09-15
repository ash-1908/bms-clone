import React from "react";
import { DefaultHOC } from "./HOC/Default.HOC";
import HomePage from "./Pages/HomePage";
import { MovieHOC } from "./HOC/Movie.HOC";
import MoviePage from "./Pages/MoviePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={MoviePage} />
    </>
  );
}

export default App;
