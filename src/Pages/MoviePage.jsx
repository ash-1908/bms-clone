import React, {useContext} from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import { FaCcPaypal } from "react-icons/fa";
import Cast from "../components/Cast/Cast";
import PosterSlider from "../components/PosterSlider/PosterSlider"
import { MovieContext } from "../Context/Movie.context";
import { DefaultContext } from "../Context/Default.context";


const MoviePage = () => {
  const {movie, cast} = useContext(MovieContext)
  const { popular, topRated, upcoming } = useContext(DefaultContext);


  return (
    <>
      <MovieHero />
      <div className="w-5/6 mx-auto">
        <div className="w-full lg:w-4/5">
          <div>
            <h2 className="my-5 text-2xl font-bold text-black">
              About the movie
            </h2>
            <p className="text-md text-black">{movie.overview}</p>
            <div className="my-8 w-full h-0.5 bg-gray-200 rounded-full" />
          </div>
          <div>
            <h2 className="my-5 text-2xl font-bold text-black">
              Applicable Offers
            </h2>
            <div className="flex flex-col lg:flex-row w-full justify-between">
              <div className="mb-3 mr-3 flex items-start border-dashed border-4 rounded-md p-1 bg-yellow-100 border-yellow-400">
                <FaCcPaypal className="text-6xl mr-3" />
                <div>
                  <h3 className="font-semibold text-md">Paypal Offer</h3>
                  <p className="text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione eos, vel tempore officiis minus porro.
                  </p>
                </div>
              </div>
              <div className="mb-3 mr-3 flex items-start border-dashed border-4 rounded-md p-1 bg-yellow-100 border-yellow-400">
                <FaCcPaypal className="text-6xl mr-3" />
                <div>
                  <h3 className="font-semibold text-md">Paypal Offer</h3>
                  <p className="text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione eos, vel tempore officiis minus porro.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-8 w-full h-0.5 bg-gray-200 rounded-full" />
          </div>
          <div>
            <h2 className="my-5 text-2xl font-bold text-black">
              Cast and Crew
            </h2>
            <Cast images={cast} />
            <div className="my-8 w-full h-0.5 bg-gray-200 rounded-full" />
          </div>
          <div>
            <h2 className="my-5 text-2xl font-bold text-black">
              You might also like
            </h2>
            <PosterSlider
              images={popular}
              title=""
              subtitle=""
              isDark={false}
            />
            <div className="mb-8 w-full h-0.5 bg-gray-200 rounded-full" />
          </div>
          <div>
            <h2 className="my-5 text-2xl font-bold text-black">BMS Xclusive</h2>
            <PosterSlider
              images={topRated}
              title=""
              subtitle=""
              isDark={false}
              home={false}
            />
            <div className="mb-8 w-full h-0.5 bg-gray-200 rounded-full" />
          </div>
          <div>
            <h2 className="my-5 text-2xl font-bold text-black">Coming Soon</h2>
            <PosterSlider
              images={upcoming}
              title=""
              subtitle=""
              isDark={false}
              home={false}
            />
            <div className="mb-8 w-full h-0.5 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviePage;
