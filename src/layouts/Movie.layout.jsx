import React from "react";
import MovieNav from "../Components/Navbar/MovieNav.component";
import Category from "../Components/Category/Category";

const MovieLayout = (props) => {
  return (
    <div>
      <MovieNav title={props.title} />
      <Category className="hidden lg:flex" />
      {props.children}
    </div>
  );
};

export default MovieLayout;
