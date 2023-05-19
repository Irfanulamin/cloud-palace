import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const ToyCard = ({ toy, toastifyWarning }) => {
  const { user } = useContext(AuthContext);

  const handleViewDetails = () => {
    if (!user?.email) {
      toastifyWarning();
    }
  };

  const { _id, image, name, price, rating, quantity } = toy;
  return (
    <div className="bg-base-100 p-7 rounded">
      <div>
        <img
          src={image}
          alt="product-image"
          className="h-56 w-60 object-cover border border-stone-400 rounded-md "
        />
      </div>
      <div>
        <p className="text-center mt-2 mb-4 text-xl font-semibold primary_font">
          {name}
        </p>
      </div>
      <div>
        <p className="font-semibold text-lg">
          Price: <span className="text-base text-green-600"> {price}$</span>
        </p>
        <p className="font-semibold text-lg">
          Quantity:
          <span className="text-base text-green-600"> {quantity}</span>
        </p>
      </div>
      <div className="my-1">
        <Rating style={{ maxWidth: 120 }} value={Math.round(rating)} readOnly />
      </div>
      {user?.email ? (
        <Link to={`/toy/${_id}`}>
          <div className="font-semibold rounded hover:bg-white w-full transition text-center mt-2 text-black bg_tags py-2">
            View Detail
          </div>
        </Link>
      ) : (
        <div
          onClick={handleViewDetails}
          className="font-semibold rounded hover:bg-white w-full transition text-center mt-2 text-black bg_tags py-2"
        >
          View Detail
        </div>
      )}
    </div>
  );
};

export default ToyCard;
