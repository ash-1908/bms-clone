import React,{ useEffect, useContext } from "react";
import { DefaultHOC } from "./HOC/Default.HOC";
import HomePage from "./Pages/HomePage";
import { MovieHOC } from "./HOC/Movie.HOC";
import MoviePage from "./Pages/MoviePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { DefaultContext } from "./Context/Default.context";


axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_MYAPIKEY;
  
function App() {
const { setHero, setPlaying, setPopular, setTopRated, setUpcoming } = useContext(DefaultContext);

useEffect(() => {
  // fetch images for hero carousal
  const fetchHero = async () => {
    const getHero = await axios.get("/movie/now_playing");
    setHero(getHero.data.results);
  };

  fetchHero();

  // fetch data for poster slider component

  //now playing
  const fetchNowPlaying = async () => {
    const getNowPlaying = await axios.get("/movie/now_playing");

    setPlaying(getNowPlaying.data.results);
  };

  fetchNowPlaying();

  //popular movies
  const fetchPopular = async () => {
    const getPopular = await axios.get("/movie/popular");

    setPopular(getPopular.data.results);
  };

  fetchPopular();

  //TopRated movies
  const fetchTopRated = async () => {
    const getTopRated = await axios.get("/movie/top_rated");

    setTopRated(getTopRated.data.results);
  };

  fetchTopRated();

  //Upcoming movies
  const fetchUpcoming = async () => {
    const getUpcoming = await axios.get("/movie/upcoming");

    setUpcoming(getUpcoming.data.results);
  };

  fetchUpcoming();
}, []);

  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={MoviePage} />
    </>
  );
}

export default App;
