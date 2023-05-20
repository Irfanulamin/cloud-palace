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
        <Link to="/">
          <div className="flex justify-center items-center ">
            <p className="btn border-none hover:text-black hover:bg-transparent bg-yellow-400 text-lg tracking-wider font-semibold ">
              Go to the Home Page
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
