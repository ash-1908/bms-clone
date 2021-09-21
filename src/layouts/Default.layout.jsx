import React from "react";
import Navbar from "../Components/Navbar/Navbar.component";
import SimpleSlider from "../Components/Carousal/Hero";
import Category from "../Components/Category/Category";


const DefaultLayout = (props) => {
  

  return (
    <div>
      <Navbar />
      <Category />
      <SimpleSlider />
      {props.children}
    </div>
  );
};

export default DefaultLayout;
