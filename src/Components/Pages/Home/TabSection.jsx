import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TeddyBearTab from "./TeddyBearTab";
import DinosaurTab from "./DinosaurTab";
import AnimalTab from "./AnimalTab";

const TabSection = () => {
  return (
    <div className="bg_primary pt-32">
      <h2 className="text-center  text-7xl bg_tags text-white primary_font  mb-24">
        Tab Section
      </h2>
      <Tabs>
        <TabList className="text-white  text-lg font-semibold flex justify-center items-center">
          <Tab>Teddy Bear</Tab>
          <Tab>Dinosaurs</Tab>
          <Tab>Animals</Tab>
        </TabList>

        <TabPanel>
          <TeddyBearTab></TeddyBearTab>
        </TabPanel>
        <TabPanel>
          <DinosaurTab></DinosaurTab>
        </TabPanel>
        <TabPanel>
          <AnimalTab></AnimalTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabSection;
