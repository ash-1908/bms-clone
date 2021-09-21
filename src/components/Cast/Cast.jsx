import React from "react";
import Slider from "react-slick";
import { settings } from "../configs/Cast.config";

const CastMember = ({ profile_path, original_name, character }) => {
  return (
    <div className="flex flex-col items-start">
      <div className="w-16 h-16 lg:w-24 lg:h-24">
        <img
          src={`https://image.tmdb.org/t/p/original/${profile_path}`}
          alt={original_name+" picture"}
          className="rounded-full w-full h-full"
        />
      </div>
      <div className="m-1 flex flex-col">
        <h4 className="text-md font-bold">{original_name}</h4>
        <p className="text-xs">as {character}</p>
      </div>
    </div>
  );
};

const Cast = ({ images }) => {
  return (
    <div>
      <Slider {...settings}>
        {images.map((image) => (
          <CastMember {...image} />
        ))}
      </Slider>
    </div>
  );
};

export default Cast;
