import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div className="py-16 flex justify-center items-center bg_secondary">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-6xl font-bold color_primary">Register now!</h1>
          <p className="py-6 text-lg font-medium  text-white ">
            Register into our toy store website offers personalized
            recommendations, order tracking, wishlist creation, and access to
            exclusive offers and discounts, enhancing your shopping experience
            and ensuring convenience.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100">
          <form>
            <div className="p-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  required
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  required
                  name="photoURL"
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  required
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <Link className="link link-hover font-semibold " to="/login">
                Already have an account ?
                <span className="color_primary"> Login</span>
              </Link>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary border-none bg_primary ease-in hover:bg-white hover:text-black"
                  type="submit"
                  value="Register"
                />
              </div>
              <hr className="border border-black my-4" />
              <div className="flex justify-center items-center">
                <FcGoogle className="h-7 w-7"></FcGoogle>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
