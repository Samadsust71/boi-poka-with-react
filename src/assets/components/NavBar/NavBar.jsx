import React from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-green-500 border border-green-500 px-4 py-2 rounded-lg" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/listedBooks"}
          className={({ isActive }) =>
            isActive ? "text-green-500 border border-green-500 px-4 py-2 rounded-lg" : ""
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/pagesToRead"}
          className={({ isActive }) =>
            isActive ? "text-green-500 border border-green-500 px-4 py-2 rounded-lg" : ""
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="space-y-4 menu-sm dropdown-content bg-base-100  rounded-box z-[1] mt-3 w-52 p-2"
          >
            {links}
          </ul>
        </div>
        <a className="text-[28px] font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-4 menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-4">
        <a className="px-4 py-3 rounded-lg font-semibold bg-[#23BE0A] border border-[#23BE0A] text-white hover:bg-white hover:text-[#23BE0A] cursor-pointer">Sign In</a>
        <a className="px-4 py-3 rounded-lg font-semibold bg-[#59C6D2] border border-[#59C6D2] text-white hover:bg-white hover:text-[#59C6D2] cursor-pointer">Sign Up</a>
      </div>
    </div>
  );
};

export default NavBar;
