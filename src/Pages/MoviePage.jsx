import React from "react";
import MovieHero from "../Components/MovieHero/MovieHero.component";
import { FaCcPaypal } from "react-icons/fa";
import Cast from "../Components/Cast/Cast";
import PosterSlider from "../Components/PosterSlider/PosterSlider"
import {TempImages} from "../Components/TempImages/TempImages"

const MoviePage = () => {
  const images = [
    {
      src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/akshay-kumar-94-20-12-2017-04-36-47.jpg",
      name: "Akshay Kumar",
      role: "Superman",
    },
    {
      src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/akshay-kumar-94-20-12-2017-04-36-47.jpg",
      name: "Akshay Kumar",
      role: "Superman",
    },
    {
      src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/huma-qureshi-30360-24-03-2017-13-58-06.jpg",
      name: "Huma",
      role: "Superwoman",
    },
    {
      src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/akshay-kumar-94-20-12-2017-04-36-47.jpg",
      name: "Akshay Kumar",
      role: "Superman",
    },
    {
      src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/akshay-kumar-94-20-12-2017-04-36-47.jpg",
      name: "Akshay Kumar",
      role: "Superman",
    },
    {
      src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/huma-qureshi-30360-24-03-2017-13-58-06.jpg",
      name: "Huma",
      role: "Superwoman",
    },
  ];

  return (
    <>
      <MovieHero />
      <div className="w-5/6 mx-auto">
        <div className="w-full lg:w-4/5">
          <div>
            <h2 className="my-5 text-2xl font-bold text-black">
              About the movie
            </h2>
            <p className="text-md text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              voluptatem ullam atque, numquam architecto soluta dolores.
              Repudiandae, quibusdam pariatur sint vel ab, consequuntur vitae
              odit quas saepe minus mollitia tempore assumenda adipisci possimus
              magnam recusandae molestias. Id sequi perferendis repellat saepe
              deleniti maiores quaerat explicabo ab magni, consequatur nihil
              nostrum provident eveniet beatae soluta tempora facere sed,
              dolorum corrupti fugit ut optio. Quis id, dolorum tempora, at
              minima repellat illum esse expedita ducimus eaque laudantium
              eligendi odio adipisci aliquid error et autem necessitatibus
              assumenda inventore dolores. Qui praesentium alias fuga eius rerum
              reiciendis. Asperiores saepe optio sequi ipsa officia vitae.
            </p>
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
            <Cast images={images} />
            <div className="my-8 w-full h-0.5 bg-gray-200 rounded-full" />
          </div>
          <div>
            <h2 className="my-5 text-2xl font-bold text-black">
              You might also like
            </h2>
            <PosterSlider
              images={TempImages}
              title=""
              subtitle=""
              isDark={false}
            />
            <div className="mb-8 w-full h-0.5 bg-gray-200 rounded-full" />
          </div>
          <div>
            <h2 className="my-5 text-2xl font-bold text-black">
              BMS Xclusive
            </h2>
            <PosterSlider
              images={TempImages}
              title=""
              subtitle=""
              isDark={false}
            />
            <div className="mb-8 w-full h-0.5 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviePage;
