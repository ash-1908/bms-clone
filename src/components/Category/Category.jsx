import React from 'react'

const Category = () => {
    return (
      <div className="hidden md:block bg-bms-800 p-3 text-sm w-full">
        <div className="md:pl-2 lg:w-5/6 flex mx-auto hidden md:flex justify-between">
          <div className="text-gray-400 w-full">
            <ul className="text-style-none flex gap-3">
              <li>Movies</li>
              <li>Stream</li>
              <li>Events</li>
              <li>Plays</li>
              <li>Sports</li>
              <li>Activites</li>
              <li>Buzz</li>
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
