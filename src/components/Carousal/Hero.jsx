import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "../CarousalArrows/index";
import axios from "axios";

const SimpleSlider = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      const getImages = await axios.get("/trending/all/day");
      setImages(getImages.data.results);
    };

    getTrending();
  }, []);

  const settingsLg = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "250px",
    className: "overflow-hidden",
    arrows: true,
    prevArrow: <PrevArrow top="top-44" hero="true" />,
    nextArrow: <NextArrow top="top-44" hero="true" />,
  };

  const settingsSm = {
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    swipeToScroll: 1,
    className: "overflow-hidden focus:outline-none",
  };

  return (
    <>
      <div className="lg:hidden mt-1">
        <Slider {...settingsSm}>
          {images.map((image) => (
            <div className="w-full h-44 md:h-96">
              <img
                src={`https://image.tmdb.org/t/p/original${image.poster_path}`}
                alt="testing"
                className="w-full h-full"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden lg:block mt-1">
        <Slider {...settingsLg}>
          {images.map((image) => (
            <div className="h-96 px-1">
              <img
                src={`https://image.tmdb.org/t/p/original${image.poster_path}`}
                alt="testing"
                className="w-full h-full rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default SimpleSlider