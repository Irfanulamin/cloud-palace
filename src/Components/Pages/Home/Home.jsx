import React from "react";
import Banner from "./Banner";
import GallerySection from "./GallerySection";
import TabSection from "./TabSection";
import useTitle from "../../../CustomHooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Banner></Banner>
      <GallerySection></GallerySection>
      <TabSection></TabSection>
    </>
  );
};

export default Home;
