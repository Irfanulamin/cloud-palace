import React from "react";
import img4 from "../../../assets/images/4.jpg";
import img3 from "../../../assets/images/3.jpg";
import img2 from "../../../assets/images/2.jpg";
import img1 from "../../../assets/images/1.jpg";

const Banner = () => {
  return (
    <div className="hidden md:block lg:block">
      <div className="w-full gap-7 pt-4 bg_primary px-16  grid grid-cols-5">
        <div className="col-start-1 col-end-5 ease-out ">
          <img src={img4} className="w-full h-80 object-cover " />
        </div>
        <div className="col-start-5 col-end-6">
          <img src={img1} className="w-full h-80 object-cover" />
        </div>
      </div>
      <div className="w-full gap-7 pt-7 bg_primary px-16  grid grid-cols-5">
        <div className="col-start-1 col-end-4 ">
          <img src={img2} className="w-full h-80 object-cover" />
        </div>
        <div className="col-start-4 col-end-6 ">
          <img src={img3} className="w-full h-80 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
