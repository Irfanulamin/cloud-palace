import React from "react";
import img4 from "../../../assets/images/4.jpg";
import img3 from "../../../assets/images/3.jpg";
import img2 from "../../../assets/images/2.jpg";
import img1 from "../../../assets/images/1.jpg";

const Banner = () => {
  return (
    <div className="hidden bg_primary md:block pb-24 px-16 lg:block">
      <div className="w-full gap-7  pb-7  grid grid-cols-5">
        <div className="col-start-1 col-end-5  ">
          <img src={img1} className="w-full h-80 object-cover" />
        </div>
        <div className="col-start-5 col-end-6">
          <img src={img2} className="w-full h-80 object-cover" />
        </div>
      </div>
      <div className="w-full gap-7 grid grid-cols-5">
        <div className="col-start-1 col-end-4 ">
          <img src={img3} className="w-full h-80 object-cover  " />
        </div>
        <div className="col-start-4 col-end-6 ">
          <img src={img4} className="w-full h-80 object-cover  object-top" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
