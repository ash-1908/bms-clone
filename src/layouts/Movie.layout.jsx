import React from "react";
import Navbar from "../Components/Navbar/Navbar.component";
import Category from "../Components/Category/Category";

const MovieLayout = (props) => {
  return (
    <div>
      <Navbar />
      <Category />
      {props.children}
    </div>
  );
};

export default MovieLayout;
