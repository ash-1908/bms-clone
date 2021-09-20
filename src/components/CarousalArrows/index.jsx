import React from 'react'
import {BiLeftArrow, BiRightArrow} from "react-icons/bi"

export const PrevArrow = (props) => {
    return (
      <div
        className={`w-22 bg-black bg-opacity-40 hover:bg-opacity-80 ${
          props.hero ? "py-3 px-4 rounded-md" : "rounded-full p-3"
        } absolute -left-2 z-10 ${props.top}`}
        onClick={props.onClick}
      >
        <BiLeftArrow className="text-lg text-white" />
      </div>
    );
}

export const NextArrow = (props) => {
    return (
      <div
        className={`w-22 bg-black bg-opacity-40 hover:bg-opacity-80 ${
          props.hero ? "py-3 px-4 rounded-md" : "rounded-full p-3"
        } absolute -right-2 z-10 ${props.top}`}
        onClick={props.onClick}
      >
        <BiRightArrow className="text-lg text-white" />
      </div>
    );
}

