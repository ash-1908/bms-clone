export const settings = {
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
