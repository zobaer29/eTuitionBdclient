import React from "react";
import { Link } from "react-router";
import Logo from "./Logo";

const Navbar = () => {
  const links = (
    <>
      <Link to={"/"}>Home</Link>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            ></div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow rounded-xs"
            >
              {links}
            </ul>
          </div>
          <Logo></Logo>
          <a className="btn btn-ghost text-xl">eTuitionBd</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link to="login" className="btn">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
