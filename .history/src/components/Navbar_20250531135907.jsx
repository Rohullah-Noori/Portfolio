import { Link, useLocation } from "react-router-dom";

import Container from "./Container";
import { useState } from "react";
import { FaBeer, FaHamburger } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";

function Navbar() {
  const pathname = useLocation().pathname;
  const [open, setIsopen] = useState(false);
  const Links = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="shadow-md bg-white sticky top-0 z-10">
      <Container>
        <div className="flex justify-end items-center p-4 ">
          <nav className="flex justify-between items-center w-full ">
            <h1 className="font-bold text-lg sm:text-lg md:text-xl lg:text-2xl font-display  ">
              <Link to="/">Rohullah</Link>
            </h1>

            <button
              onClick={() => setIsopen(!open)}
              className="md:hidden text-2xl text-black focus:outline-none"
              aria-label="Toggle navigation"
            >
              {open ? (
                <FaXmark className="w-7 h-7 text-red-500" />
              ) : (
                <MdMenu className="w-7 h-7 text-blue-400" />
              )}
            </button>

            <ul className="md:flex md:space-x-4 text-black absolute md:static bg-white md:bg-transparent left-0 md:w-auto md:opacity-100">
              {Links.map((link) => (
                <li
                  key={link.name}
                  className={` relative group font-display  border-b-1 border-transparent text-sm sm:text-md md:text-lg lg:text-xl   hover:text-blue-400   ${
                    pathname === link.path ? "text-blue-400 " : ""
                  }`}
                >
                  <Link to={link.path}>
                    {link.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
