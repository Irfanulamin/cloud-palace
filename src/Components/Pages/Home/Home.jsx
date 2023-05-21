import React from "react";
import Banner from "./Banner";
import GallerySection from "./GallerySection";
import TabSection from "./TabSection";
import useTitle from "../../../CustomHooks/useTitle";
import OurServices from "./OurServices";
import Testimonial from "./Testimonial";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Banner></Banner>
      <GallerySection></GallerySection>
      <TabSection></TabSection>
      <Testimonial></Testimonial>
      <OurServices></OurServices>
    </>
  );
};

export default Home;
