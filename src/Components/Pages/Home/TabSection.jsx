import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabSection = () => {
  return (
    <Tabs className="bg_primary pt-12">
      <TabList className="text-white  text-lg font-semibold flex justify-center items-center">
        <Tab>Soft Toys</Tab>
        <Tab>Vehicle Toys</Tab>
        <Tab>Puzzle</Tab>
      </TabList>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 3</h2>
      </TabPanel>
    </Tabs>
  );
};

export default TabSection;
