import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import { RiBearSmileFill } from "react-icons/ri";
import { TbMoodKid } from "react-icons/tb";

const OurServices = () => {
  return (
    <div className="bg-white py-44 px-20">
      <h2 className="text-center mb-16 text-black bg_tags rounded underline text-4xl  md:text-4xl  lg:text-6xl font-bold primary_font ">
        Our Services
      </h2>
      <div className="flex flex-col   gap-16 lg:flex-row  justify-center items-center  ">
        <div className="flex gap-2 flex-col md:flex-col lg:flex-row justify-center items-center">
          <div className="flex  p-6 flex-col md:flex-row lg:flex-row gap-2 justify-center items-center">
            <div>
              <AiOutlineGift className="h-12 w-12 text-black lg:h-28 lg:w-28"></AiOutlineGift>
            </div>
            <div>
              <h2 className="text-black primary_font text-xl font-semibold">
                Gift Voucher.
              </h2>
              <p className="text-black text-sm font-semibold">
                Give the perfect gift of choice and delight with our versatile
                <br />
                gift vouchers
              </p>
            </div>
          </div>
          <div className="flex  p-8 flex-col md:flex-row lg:flex-row gap-2 justify-center items-center">
            <div>
              <FiTruck className="h-12 w-12 text-black lg:h-24 lg:w-24"></FiTruck>
            </div>
            <div>
              <h2 className="text-black primary_font text-xl font-semibold">
                Worldwide Delivery.
              </h2>
              <p className="text-black text-sm font-semibold">
                Experience the joy of global gifting with our seamless worldwide
                <br />
                delivery service.
              </p>
            </div>
          </div>
          <div className="flex  p-8 flex-col md:flex-row lg:flex-row gap-2 justify-center items-center">
            <div>
              <RiBearSmileFill className="h-12 w-12 text-black lg:h-24 lg:w-24"></RiBearSmileFill>
            </div>
            <div>
              <h2 className="text-black primary_font text-xl font-semibold">
                Cuddly Soft Toys.
              </h2>
              <p className="text-black text-sm font-semibold">
                Embrace endless cuddles with our irresistibly soft and huggable
                <br />
                plush toys.
              </p>
            </div>
          </div>
          <div className="flex  p-8 flex-col md:flex-row lg:flex-row gap-2 justify-center items-center">
            <div>
              <TbMoodKid className="h-12 w-12 text-black lg:h-24 lg:w-24"></TbMoodKid>
            </div>
            <div>
              <h2 className="text-black primary_font text-xl font-semibold">
                Suitable for kids.
              </h2>
              <p className="text-black text-sm font-semibold">
                Suitable for little ones' endless imagination and enjoyment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
