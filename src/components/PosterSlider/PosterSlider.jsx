import React from "react";
import { settings } from "../configs/PosterSlider.config";
import Poster from "../Poster/Poster";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const PosterSlider = (props) => {
  return (
    <>
      <div className={`w-full 
      ${props.home ? "lg:w-5/6" : "w-full"} mx-auto`}>
        <h3
          className={`lg:text-2xl lg:font-bold text-lg font-semibold mx-1 md:mx-2 lg:mx-4 my-3
            ${props.isDark ? "text-white" : "text-bms-700"}`}
        >
          {props.title}
        </h3>
        <p
          className={`text-xs md:text-sm mx-1 md:mx-2 lg:mx-4 mb-4 ${
            props.isDark ? "text-gray-400" : "text-gray-700"
          }`}
        >
          {props.subtitle}
        </p>
        <div>
          <Slider {...settings}>
            {props.images.map((image) => (
            <Link to={`/movie/${image.id}`}>

              <Poster {...image} isDark={props.isDark} />
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default PosterSlider;
