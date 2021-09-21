import React from "react";
import Navbar from "../components/Navbar/Navbar.component";
import SimpleSlider from "../components/Carousal/Hero";
import Category from "../components/Category/Category";


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
