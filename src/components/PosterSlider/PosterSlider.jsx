import React from 'react'
import {settings} from "../configs/PosterSlider.config"
import Poster from "../Poster/Poster"
import Slider from 'react-slick'

const PosterSlider = (props) => {
    return (
      <>
        <div className="w-full lg:w-5/6 mx-auto">
          <h3
            className={`lg:text-2xl lg:font-bold text-lg font-semibold mx-1 md:mx-2 lg:mx-4 ${
              props.isDark ? "text-white" : "text-bms-700"
            }`}
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
                <Poster {...image} />
              ))}
            </Slider>
          </div>
        </div>
      </>
    );
}

export default PosterSlider