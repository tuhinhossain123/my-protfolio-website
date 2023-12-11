import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const links = (
    <>
      <li className="text-[16px] font-bold">
        <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
          <p></p> Home
        </Link>
      </li>
      <li className="text-[16px]  font-bold">
        <Link to="/skills" spy={true} smooth={true} offset={50} duration={500}>
          Skills
        </Link>
      </li>
      <li className="text-[16px]  font-bold">
        <NavLink
          to="/projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Projects
        </NavLink>
      </li>
      <li className="text-[16px]  font-bold">
        <Link to="/about" spy={true} smooth={true} offset={50} duration={500}>
          About Me
        </Link>
      </li>
      <li className="text-[16px] font-bold">
        <Link to="/contact" spy={true} smooth={true} offset={50} duration={500}>
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar sticky top-0 max-w-[1200px] mx-auto">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <button className="md:text-xl font-mono font-bold text-gray-400">
          Tofazzal Hossain
        </button>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
