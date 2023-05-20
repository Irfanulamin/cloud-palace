import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [hover, setHover] = useState(false);

  const handleHoverIn = () => {
    setHover(true);
  };

  const handleHoverOut = () => {
    setHover(false);
  };

  const handleSignOut = () => {
    logOut()
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => err.message);
  };

  return (
    <div className="bg_primary flex flex-col gap-12 md:flex-row lg:flex-row justify-between items-center py-10 px-12">
      <div>
        <img
          src="/logo.png"
          alt="cloud-palace-logo"
          className="w-24 h-16 md:w-32 md:h-24 lg:w-32 lg:h-24"
        />

        <p className="primary_font mt-2 text-3xl md:text-4xl lg:text-5xl text-white">
          Cloud Palace
        </p>
      </div>
      <div className="flex  flex-col md:flex-row lg:flex-row justify-center items-center gap-4">
        <NavLink to="/" className="text-base font-semibold text-white">
          Home
        </NavLink>
        <NavLink to="/alltoys " className="text-base font-semibold text-white">
          All Toys
        </NavLink>
        {user?.email && (
          <NavLink to="/mytoys" className="text-base font-semibold text-white">
            My Toys
          </NavLink>
        )}
        {user?.email && (
          <NavLink to="/addtoy" className="text-base font-semibold text-white">
            Add a Toy
          </NavLink>
        )}
        <NavLink to="/blogs" className="text-base font-semibold text-white">
          Blogs
        </NavLink>
        {!user && (
          <NavLink to="/login" className="text-base font-semibold text-white">
            Login
          </NavLink>
        )}
        {!user && (
          <NavLink
            to="/register"
            className="text-base font-semibold text-white"
          >
            Register
          </NavLink>
        )}

        {user?.photoURL && (
          <div
            onMouseEnter={handleHoverIn}
            onMouseLeave={handleHoverOut}
            className="avatar w-[2rem]"
          >
            <div className=" w-12 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </div>
        )}

        {hover && (
          <div>
            <p
              onMouseEnter={handleHoverIn}
              onMouseLeave={handleHoverOut}
              className="text-base font-semibold text-white "
            >
              {user?.displayName}
            </p>
          </div>
        )}

        {user && (
          <p
            className="text-base font-semibold text-white"
            onClick={handleSignOut}
          >
            Log out
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;
