import React from "react";
import { BsFillHeartFill } from "react-icons/bs";

const MovieInfo = () => {
  return (
    <>
      <div className="flex flex-col items-start text-white">
        <h2 className="text-4xl font-bold mt-2 mb-10">Title</h2>
        <div className="flex text-2xl font-semibold items-center mb-10">
          <BsFillHeartFill className="mr-3 text-red-600" />
          <h2 className="mr-4">80%</h2>
          <p>8K ratings</p>
        </div>
        <div className="mb-10 flex text-black text-lg items-center font-semibold">
          <p className="mr-5 bg-gray-400 px-2 py-1 rounded-sm">2D</p>
          <p className="mr-5 px-2 py-1 bg-gray-400 rounded-sm">Languages</p>
        </div>
        <div className="mb-10 text-lg font-semibold">
          <p>2h 33m &bull; Biograpohy, Drama &bull; U &bull; 10Sept</p>
        </div>
        <div className="flex">
          <button className="px-7 py-4 bg-red-600 text-lg text-white font-semibold rounded-md mr-10 w-44 hover:bg-red-700">
            Buy
          </button>
          <button className="px-7 py-4 bg-red-600 text-lg text-white font-semibold rounded-md ml-10 w-44 hover:bg-red-700">
            Rent
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
