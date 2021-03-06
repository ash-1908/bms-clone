import React, {useContext} from "react";
import { MovieContext } from "../../Context/Movie.context";
import MovieInfo from "./MovieInfo";

const MovieHero = () => {
  const {movie} = useContext(MovieContext);

  return (
    <>
      <div>
        {/* Small screen */}
        <div className="relative md:hidden w-full" style={{ height: "100vh" }}>
          <div className="p-3 absolute z-10 bottom-0 bg-opacity-50 bg-black w-full h-52">
            <MovieInfo />
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.original_title + " poster"}
            className="w-full h-full"
          />
        </div>
        {/* Medium screen */}
        <div
          className="relative hidden md:block lg:hidden w-full"
          style={{ height: "100vh" }}
        >
          <div className="p-4 absolute z-10 bottom-0 bg-opacity-50 bg-black w-full h-52">
            <MovieInfo />
          </div>
          <div className="absolute w-full h-full" />
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.original_title + " poster"}
            className="w-full h-full"
          />
        </div>
        {/* Large screen */}
        <div
          className="relative hidden lg:block w-full"
          style={{ height: "30rem" }}
        >
          <div
            className="z-10 absolute w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
            }}
          />

          <div className="absolute z-30 top-14 left-32 flex items-start h-96">
            <div className="w-72 h-full mr-10">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="poster"
                className="w-full h-full rounded-xl"
              />
            </div>
            <div>
              <MovieInfo />
            </div>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.original_title}
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default MovieHero;
