import React from 'react'
import Slider from 'react-slick';
import Poster from '../Poster/Poster';

const Premiere = () => {
    const settings = {
      speed: 600,
      initialSlide: 0,
      arrows: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            swipeToSlide: true,
            arrows: false,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 3,
            swipeToSlide: true,
            arrows: false,
          },
        },
      ],
    };

    const PremierImages = [
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00132338-brjalettes-portrait.jpg",
        alt: "zack",
        title: "Zacl",
        subtitle: "english",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00132338-brjalettes-portrait.jpg",
        alt: "zack",
        title: "Zacl",
        subtitle: "english",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00132338-brjalettes-portrait.jpg",
        alt: "zack",
        title: "Zacl",
        subtitle: "english",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00132338-brjalettes-portrait.jpg",
        alt: "zack",
        title: "Zacl",
        subtitle: "english",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00132338-brjalettes-portrait.jpg",
        alt: "zack",
        title: "Zacl",
        subtitle: "english",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00132338-brjalettes-portrait.jpg",
        alt: "zack",
        title: "Zacl",
        subtitle: "english",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00132338-brjalettes-portrait.jpg",
        alt: "zack",
        title: "Zacl",
        subtitle: "english",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00132338-brjalettes-portrait.jpg",
        alt: "zack",
        title: "Zacl",
        subtitle: "english",
      },
    ];

    return (
      <div className="bg-bms-700 w-full pt-5 pb-10">
        <div className="h-14 md:h-24 lg:w-5/6 lg:mx-auto mb-5 px-1 md:px-2 lg:px-6">
          <img
            src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
            alt="Premiere logo"
            className="w-full h-full bg-cover"
          />
        </div>
        <div className="w-full lg:w-5/6 mx-auto">
          <Slider {...settings}>
            {PremierImages.map((image) => (
              <Poster {...image} />
            ))}
          </Slider>
        </div>
      </div>
    );
}

export default Premiere
