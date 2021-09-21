import React, { useContext, useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { MovieContext } from "../../Context/Movie.context";
import PaymentModal from "../PaymentModal/PaymentModal";

const MovieInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const { movie } = useContext(MovieContext);
  const spoken_languages = movie.spoken_languages
    ?.map(({ name }) => name)
    .join(", ");
  const genres = movie.genres?.map(({ name }) => name).join(", ");

  const rentMovie = () => {
    setIsOpen(true);
    setPrice(199);
  };
  const buyMovie = () => {
    setIsOpen(true);
    setPrice(599);
  };

  return (
    <>
      <PaymentModal isOpen={isOpen} setIsOpen={setIsOpen} price={price} setPrice={setPrice} />
      <div className="flex flex-col items-start text-white flex-col-reverse lg:flex-col">
        <h2 className="hidden lg:block text-4xl font-bold mt-2 mb-10">
          {movie.original_title}
        </h2>
        <div className="flex text-xl lg:text-2xl font-semibold items-center mb-4 lg:mb-10">
          <BsFillHeartFill className="mr-3 text-red-600" />
          <h2 className="mr-4">{() => movie.popularity.toFixed(0)}</h2>
          <p>{movie.vote_count} ratings</p>
        </div>
        <div className="mb-4 lg:mb-10 flex text-black text-sm lg:text-lg items-center font-semibold">
          <p className="mr-5 bg-gray-400 px-2 py-1 rounded-sm">2D</p>
          <p className="mr-5 px-2 py-1 bg-gray-400 rounded-sm">
            {spoken_languages}
          </p>
        </div>
        <div className="mb-4 lg:mb-10 text-sm lg:text-lg font-semibold">
          <p>
            {(movie.runtime / 60).toFixed(0) +
              " h " +
              (movie.runtime % 60).toFixed(0) +
              " m"}{" "}
            &bull; {genres} &bull; {movie.adult ? "13+" : "U"} &bull;{" "}
            {movie.release_date}
          </p>
        </div>
        <div className="flex w-full mb-4 w-full">
          <button className="mr-2 py-2 w-full lg:px-7 lg:py-4 bg-red-600 text-lg text-white font-semibold rounded-md lg:w-44 hover:bg-red-700" onClick={buyMovie}>
            Buy Rs 599
          </button>
          <button className="py-2 w-full lg:px-7 lg:py-4 bg-red-600 text-lg text-white font-semibold rounded-md lg:w-44 hover:bg-red-700" onClick={rentMovie}>
            Rent Rs 199
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
