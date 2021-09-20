import React, { useEffect, useContext } from "react";
import Navbar from "../Components/Navbar/Navbar.component";
import SimpleSlider from "../Components/Carousal/Hero";
import Category from "../Components/Category/Category";
import { DefaultContext } from "../Context/Default.context";
import axios from "axios";

const DefaultLayout = (props) => {
  const { setHero, setPlaying, setPopular, setTopRated, setUpcoming } =
    useContext(DefaultContext);

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
    <div>
      <Navbar />
      <Category />
      <SimpleSlider />
      {props.children}
    </div>
  );
};

export default DefaultLayout;
