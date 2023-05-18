import React from "react";
import errorImage from "../../assets/error-image/error.jpg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div
        className="
      "
      >
        <p className="text-center text-3xl  font-sans font-semibold mb-3">
          Opps , something went wrong!!
        </p>
      </div>
      <div>
        <img src={errorImage} alt="404-Image" className="w-96" />
      </div>
      <div>
        <Link to="/" className="text-3xl font-semibold font-sans ">
          Go Back to the
          <span className="text-yellow-400 r"> Webpage</span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
