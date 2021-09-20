import React from 'react'

const Poster = (props) => {
    return (
      <div className="flex flex-col items-start gap-2 mx-1 md:mx-2 lg:mx-4">
        <div className="w-full h-40 md:h-52 lg:h-72">
          <img
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt={props.original_title}
            className="w-full h-full rounded-md"
          />
        </div>
        <div>
          <h3
            className={`text-sm md:text-base lg:text-lg font-semibold 
            ${props.isDark ? "text-white" : "text-bms-700"}`}
          >
            {props.original_title}
          </h3>
          <h5
            className={`text-xs md:text-sm lg:text-sm ${
              props.isDark ? "text-gray-400" : "text-gray-300"
            }`}
          >
            Released on: {props.release_date}
          </h5>
        </div>
      </div>
    );
}

export default Poster
