import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg_primary flex flex-col gap-y-12 md:flex-row lg:flex-row justify-between items-center py-12 px-6">
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-4">
        <NavLink to="/" className="text-base font-semibold text-white">
          Home
        </NavLink>
        <NavLink to="/alltoys " className="text-base font-semibold text-white">
          All Toys
        </NavLink>
        <NavLink to="/blogs" className="text-base font-semibold text-white">
          Blogs
        </NavLink>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <img src="/logo.png" alt="cloud-palace-logo" className="w-24 h-16" />
        </div>
        <div>
          <p className="primary_font text-3xl lg:text-5xl text-white">
            Cloud Palace
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-4">
        <NavLink to="/mytoys" className="text-base font-semibold text-white">
          My Toys
        </NavLink>
        <NavLink to="/alltoys" className="text-base font-semibold text-white">
          Add a Toys
        </NavLink>
        <NavLink to="/register" className="text-base font-semibold text-white">
          Register
        </NavLink>
        <NavLink to="/login" className="text-base font-semibold text-white">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
