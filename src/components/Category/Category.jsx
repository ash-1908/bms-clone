import React from 'react'

const Category = () => {
    return (
      <div
        id="cat"
        className="lg:hidden bg-bms-800 py-2 px-3 text-xs md:text-sm w-full overflow-y-scroll"
      >
        <div className="md:pl-2 lg:w-5/6 flex mx-auto justify-between">
          <div className="text-gray-400 w-full">
            <ul className="text-style-none flex gap-3">
              <li>Movies</li>
              <li>Stream</li>
              <li>Events</li>
              <li>Plays</li>
              <li>Sports</li>
              <li>Activites</li>
              <li className="pr-3">Buzz</li>
            </ul>
          </div>
          <div className="hidden lg:block text-white w-full">
            <ul className="text-style-none flex gap-4 float-right">
              <li>ListYourShow</li>
              <li>Corporates</li>
              <li>Offers</li>
              <li>Gift Cards</li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Category
