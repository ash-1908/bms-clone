import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) => {
  return (
    <div className="w-full sm:h-28 md:h-64 lg:h-56 p-2">
      <img
        src={props.src}
        alt={props.alt}
        className="w-full h-full rounded-lg"
      />
    </div>
  );
};

const EntertainmentCardSlider = () => {
  const settings = {
    speed: 400,
    initialSlide: 0,
    arrows: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          rows: 2,
          slidesToShow: 3,
          swipeToSlide: true,
          arrows: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          rows: 2,
          slidesToShow: 2,
          swipeToSlide: true,
          arrows: false,
        },
      },
    ],
  };

  const images = [
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTM1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTAgRXZlbnRz,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/cooking-collection-202007222211.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/interactive-games-collection-202012041129.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/art-and-crafts-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/theatre-shows-collection-202012041128.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/dance-collection-01102020340.png",
  ];

  return (
    <div className="w-full lg:w-5/6 flex flex-col gap-2 lg:gap-0 mt-10 lg:mx-auto">
      <div className="flex flex-col w-5/6 p-2 pb-1 lg:pb-0 lg:w-full">
        <h3 className="lg:text-2xl lg:font-bold text-lg font-semibold">
          The Best Of Entertainment
        </h3>
        <p className="text-xs md:text-sm text-gray-600 lg:hidden">
          Step out or stay in, intresting experiences for everyone.
        </p>
      </div>
      <Slider {...settings}>
        {images.map((image) => (
          <EntertainmentCard src={image} alt="Test" />
        ))}
      </Slider>
    </div>
  );
};

export default EntertainmentCardSlider;
