import React, { useContext } from "react";
import EntertainmentCardSlider from "../Components/Entertainment/EntertainmentCard";
import PosterSlider from "../Components/PosterSlider/PosterSlider";
import { DefaultContext } from "../Context/Default.context";
const HomePage = () => {
  const {playing, popular, topRated, upcoming} = useContext(DefaultContext);
  return (
    <div>
      <EntertainmentCardSlider />
      <div className="">
        <div className="bg-bms-700 w-full pt-5 pb-10">
          <div className="h-14 md:h-24 lg:w-5/6 lg:mx-auto mb-5 px-1 md:px-2 lg:px-6">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Premiere logo"
              className="w-full h-full bg-cover"
            />
          </div>
          <PosterSlider
            images={playing}
            title="Premiere"
            subtitle="Brand new releases every Friday"
            isDark={true}
            home={true}
          />
        </div>
        <PosterSlider
          images={popular}
          title="Popular Movies"
          subtitle=""
          isDark={false}
          home={true}
        />
        <PosterSlider
          images={topRated}
          title="Top Rated Movies"
          subtitle=""
          isDark={false}
          home={true}
        />
        
        <PosterSlider
          images={upcoming}
          title="Upcoming Movies"
          subtitle=""
          isDark={false}
          home={true}
        />
      </div>
    </div>
  );
};

export default HomePage;
