import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GallerySection = () => {
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);
  return (
    <div className="bg_secondary pt-16 pb-24  px-5">
      <div className="flex justify-center items-center">
        <h2 className=" inline-block text-white bg_tags mb-24 text-5xl lg:text-7xl font-semibold">
          Gallery Section
        </h2>
      </div>
      <div className="flex flex-wrap gap-7 md:gap-0 lg:gap-0 justify-center items-center">
        <img
          src="https://i.ibb.co/CBb73sN/15.jpg"
          className="h-44 w-44 md:h-56 lg:h-60  md:w-56 lg:w-60 object-cover border border-black"
          data-aos="fade-up"
        />
        <img
          src="https://i.ibb.co/ynkmHpz/16.jpg"
          className="h-44 w-44 md:h-56 lg:h-60  md:w-56 lg:w-60 object-cover border border-black"
          data-aos="fade-up"
        />
        <img
          src="https://i.ibb.co/x599Ts2/17.jpg"
          className="h-44 w-44 md:h-56 lg:h-60  md:w-56 lg:w-60 object-cover border border-black"
          data-aos="fade-up"
        />
        <img
          src="https://i.ibb.co/51Yqn2f/8.jpg"
          className="h-44 w-44 md:h-56 lg:h-60 md:w-56 lg:w-60 object-cover border border-black"
          data-aos="fade-up"
        />
        <img
          src="https://i.ibb.co/NChLm07/1.jpg"
          className="h-44 w-44 md:h-56 lg:h-60 md:w-56 lg:w-60 object-cover border border-black"
          data-aos="fade-up"
        />
        <img
          src="https://i.ibb.co/c3GpgH3/10.jpg"
          className="h-44 w-44 md:h-56 lg:h-60 md:w-56 lg:w-60 object-cover border border-black"
          data-aos="fade-up"
        />
        <img
          src="https://i.ibb.co/njDzbxg/3.jpg"
          className="h-44 w-44 md:h-56 lg:h-60  md:w-56 lg:w-60 object-cover border border-black"
          data-aos="fade-up"
        />
        <img
          src="https://i.ibb.co/L6zpXbB/soft-1.jpg"
          className="h-44 w-44 md:h-56 lg:h-60 md:w-56 lg:w-60 object-cover border border-black"
          data-aos="fade-up"
        />
        <img
          src="https://i.ibb.co/4VG3HVD/5.jpg"
          className="h-44 w-44 md:h-56 lg:h-60 md:w-56 lg:w-60 object-cover border border-black"
          data-aos="fade-up"
        />
        <img
          src="https://i.ibb.co/tJWzqFC/14.jpg"
          className="h-44 w-44 md:h-56 lg:h-60  md:w-56 lg:w-60 object-cover border border-black"
          data-aos="fade-up"
        />
        <img
          src="https://i.ibb.co/n6J11pK/12.jpg"
          className="h-44 w-44 md:h-56 lg:h-60  md:w-56 lg:w-60 object-cover border border-black"
          data-aos="fade-up"
        />
        <img
          src="https://i.ibb.co/xjqPcYD/7.jpg"
          className="h-44 w-44 md:h-56 lg:h-60  md:w-56 lg:w-60 object-cover border border-black"
          data-aos="fade-up"
        />
      </div>
    </div>
  );
};

export default GallerySection;
