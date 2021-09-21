import React, {useContext, useEffect} from "react";
import MovieNav from "../Components/Navbar/MovieNav.component";
import Category from "../Components/Category/Category";
import {MovieContext} from "../Context/Movie.context"
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieLayout = (props) => {
  const {setMovie, setCast} = useContext(MovieContext);
  const { id } = useParams(); 
  useEffect(()=>{

    const GetMovieDetails = async() => {
      
      
      const getMovie = await axios.get(`/movie/${id}`);
      console.log(getMovie);
      setMovie(getMovie.data);
    }

    GetMovieDetails();

    const GetMovieCast = async() => {

      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    }

    GetMovieCast();
  }, [id]);

  return (
    <div>
      <MovieNav title={props.title} />
      <Category className="hidden lg:flex" />
      {props.children}
    </div>
  );
};

export default MovieLayout;
