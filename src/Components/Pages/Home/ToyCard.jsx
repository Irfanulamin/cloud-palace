import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const ToyCard = ({ toy }) => {
  const { _id, image, toyName, price, rating, quantity } = toy;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleViewDetails = () => {
    if (!user?.email) {
      Swal.fire(
        "Login first!",
        "You have to log in first to view details!",
        "error"
      );
      navigate("/login");
    } else {
      navigate(`/toy/${_id}`);
    }
  };

  return (
    <div className="bg-base-100 lg:p-7 p-4 md:p-7 rounded">
      <div>
        <img
          src={image}
          alt="product-image"
          className="h-36 md:h-56 lg:h-56 w-44 md:w-60 lg:w-60 object-cover border border-stone-400 rounded-md "
        />
      </div>
      <div>
        <p className="text-center mt-2 mb-4 text-base md:text-xl lg:text-xl font-semibold primary_font">
          {toyName}
        </p>
      </div>
      <div>
        <p className="font-semibold lg:text-lg text-sm md:text-lg">
          Price:
          <span className="lg:text-base md:text-base text-xs text-green-600">
            {price}$
          </span>
        </p>
        <p className="font-semibold lg:text-lg text-sm md:text-lg">
          Quantity:
          <span className="lg:text-base md:text-base text-xs text-green-600">
            {quantity}
          </span>
        </p>
      </div>
      <div className="my-1">
        <Rating style={{ maxWidth: 120 }} value={Math.round(rating)} readOnly />
      </div>
      <div
        onClick={handleViewDetails}
        className="font-semibold rounded hover:bg-white w-full transition text-center mt-2 text-black bg_tags py-2"
      >
        View Detail
      </div>
    </div>
  );
};

export default ToyCard;
