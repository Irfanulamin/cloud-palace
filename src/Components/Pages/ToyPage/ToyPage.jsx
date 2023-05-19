import React from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

const ToyPage = () => {
  const toyDetails = useLoaderData();

  const { image, seller, name, price, rating, quantity, description } =
    toyDetails;

  return (
    <div className="bg_secondary py-24 px-44">
      <div className=" flex flex-col md:flex-row lg:flex-row justify-start gap-16 items-center ">
        <div>
          <img
            src={image}
            alt={name}
            className="h-72 w-72 object-cover shadow-lg border border-black"
          />
        </div>
        <div className="w-1/2">
          <p className="primary_font text-4xl lg:text-5xl text-black mb-3 bg-white">
            {name}
          </p>
          <div className="border bg-white border-black mt-4">
            <p className="bg-black text-white  text-base font-bold  mn-1 px-2">
              Seller Information :
            </p>
            <p className=" text-lg  text-black font-bold  px-2 ">
              {seller.name}
            </p>
            <p className=" text-lg   text-black font-bold  px-2">
              {seller.email}
            </p>
          </div>
          <p className=" text-xl  text-black font-bold bg-white px-2 py-1 my-2">
            Price: <span className="text-green-600 ">{price}</span>
          </p>
          <p className=" text-xl  text-black font-bold bg-white py-1 pl-2 my-2">
            Quantity: <span className="text-red-600 ">{quantity}</span>
          </p>
          <div className="my-1 bg-white px-2 py-3 flex justify-center">
            <Rating
              style={{ maxWidth: 120 }}
              value={Math.round(rating)}
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="border  border-black text-black font-semibold bg-white py-1 pl-2 my-2">
        <div className="p-16">
          <p className="text-3xl tracking-wide font-extrabold mb-2">
            Description
          </p>
          <p className="text-lg">{description}!</p>
        </div>
      </div>
    </div>
  );
};

export default ToyPage;
