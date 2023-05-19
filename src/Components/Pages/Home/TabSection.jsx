import React, { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TeddyBearTab from "./TeddyBearTab";
import DinosaurTab from "./DinosaurTab";
import AnimalTab from "./AnimalTab";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TabSection = () => {
  const toastifyWarning = () => {
    toast.error("You have to login first!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <>
      <Tabs className="bg_secondary pt-12">
        <TabList className="text-white  text-lg font-semibold flex justify-center items-center">
          <Tab>Teddy Bear</Tab>
          <Tab>Dinosaurs</Tab>
          <Tab>Animals</Tab>
        </TabList>

        <TabPanel>
          <TeddyBearTab toastifyWarning={toastifyWarning}></TeddyBearTab>
        </TabPanel>
        <TabPanel>
          <DinosaurTab toastifyWarning={toastifyWarning}></DinosaurTab>
        </TabPanel>
        <TabPanel>
          <AnimalTab toastifyWarning={toastifyWarning}></AnimalTab>
        </TabPanel>
      </Tabs>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default TabSection;
