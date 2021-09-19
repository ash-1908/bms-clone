import React from "react";
import Slider from "react-slick";
import { settings } from "../configs/Cast.config";

const CastMember = ({ src, name, role }) => {
  return (
    <div className="flex flex-col items-start">
      <div className="w-16 h-16 lg:w-24 lg:h-24">
        <img
          src={src}
          alt="Cast member"
          className="rounded-full w-full h-full"
        />
      </div>
      <div className="m-1 flex flex-col">
        <h4 className="text-md font-bold">{name}</h4>
        <p className="text-xs">as {role}</p>
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
