import React, { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TeddyBearTab from "./TeddyBearTab";
import DinosaurTab from "./DinosaurTab";
import AnimalTab from "./AnimalTab";

const TabSection = () => {
  return (
    <Tabs className="bg_secondary pt-12">
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
  );
};

export default TabSection;
