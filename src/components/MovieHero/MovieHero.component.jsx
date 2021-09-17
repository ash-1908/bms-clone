import React from "react";
import { image } from "../TempImages/TempBackground";
import MovieInfo from "./MovieInfo";

const MovieHero = () => {
  return (
    <>
      <div>
        <div
          className="relative md:hidden w-full"
          style={{ height: "100vh", width: "100vw" }}
        >
          <div className="absolute z-10 bottom-0 bg-opacity-50 bg-black w-full h-52" />
          <img src={image.src} alt={image.alt} className="w-full h-full" />
        </div>
        <div
          className="relative hidden md:block lg:hidden"
          style={{ height: "100vh", width: "100vw" }}
        >
          <div className="absolute z-10 bottom-0 bg-opacity-50 bg-black w-full h-52" />
          <div className="absolute w-full h-full" />
          <img src={image.src} alt={image.alt} className="w-full h-full" />
        </div>

        <div
          className="relative hidden lg:block"
          style={{ height: "75vh", width: "100vw" }}
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
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/thalaivi-et00097273-07-09-2021-02-51-12.jpg"
                alt="poster"
                className="w-full h-full rounded-xl"
              />
            </div>
            <div>
              <MovieInfo />
            </div>
          </div>
          <img src={image.src} alt={image.alt} className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

export default MovieHero;
