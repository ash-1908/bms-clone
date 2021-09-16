import React from "react";
import { BsFillHeartFill } from "react-icons/bs";

const MovieInfo = () => {
  return (
    <>
      <div className="flex flex-col items-start text-white h-96 justify-around">
        <h2 className="text-4xl font-bold">Title</h2>
        <div className="flex text-2xl font-semibold items-center">
          <BsFillHeartFill className="mr-3 text-red-600" />
          <h2 className="mr-4">80%</h2>
          <p>8K ratings</p>
        </div>
        <div className="flex text-black text-lg items-center font-semibold">
          <p className="mr-5 bg-gray-400 px-1 py-1 rounded-sm">2D</p>
          <p className="mr-5 px-1 py-1 bg-gray-400 rounded-sm">Languages</p>
        </div>
        <div className="text-lg font-semibold">
          <p>2h 33m &bull; Biograpohy, Drama &bull; U &bull; 10Sept</p>
        </div>
        <div>
          <button className="px-7 py-4 bg-red-600 text-lg text-white font-semibold rounded-md">
            Book Tickets
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
