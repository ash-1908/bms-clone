import React from "react";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "../CarousalArrows/index";

const SimpleSlider = () => {
  const settingsLg = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "200px",
    className: "overflow-hidden",
    arrows: true,
    prevArrow: <PrevArrow top="top-44" hero="true" />,
    nextArrow: <NextArrow top="top-44" hero="true" />,
  };

  const settingsSm = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "overflow-hidden focus:outline-none",
  };

  const images = [
    "https://in.bmscdn.com/promotions/cms/creatives/1630995773558_moviethailavi_eng_incinemasnow_booknow_webshowcase_1240x300_7sep.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1631344303088_kaafiwildhaistandupbyappurvgupta_webshowcase_1240x300.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1628591224466_fnbgeneric.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1629830049996_celebfiecruisewiththestarsrevised_webshowcase_1240x300_24aug.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1631025243018_basteachersdaycampaign_webshowcase_1240x300.jpg",
  ];

  return (
    <>
      <div
        className="lg:hidden mt-1"
      >
        <Slider {...settingsSm}>
          {images.map((image) => (
            <div className="w-full h-44 md:h-96">
              <img src={image} alt="testing" className="w-full h-full" />
            </div>
          ))}
        </Slider>
      </div>
      <div
        className="hidden lg:block mt-1"
      >
        <Slider {...settingsLg}>
          {images.map((image) => (
            <div className="w-full h-96 px-1">
              <img
                src={image}
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