import { Link, useLocation } from "react-router-dom";

import Container from "./Container";
import { useEffect, useState } from "react";
import { FaBeer, FaHamburger } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div
      className={`sticky top-0 z-50 w-full text-white px-4 py-3 transition-all duration-500 
        ${
          isScrolled
            ? "bg-black/30 backdrop-blur-md shadow-md shadow-white/10"
            : "bg-black"
        }`}
    >
      <Container>
        <div className="flex items-center justify-end p-4 ">
          <nav className="flex items-center justify-between w-full ">
            <h1 className="text-lg font-bold sm:text-lg md:text-xl lg:text-2xl font-display ">
              <Link to="/">Rohullah</Link>
            </h1>

            <button
              onClick={() => setIsopen(!open)}
              className="text-2xl text-black md:hidden focus:outline-none"
              aria-label="Toggle navigation"
            >
              {open ? (
                <FaXmark className="text-red-500 w-7 h-7" />
              ) : (
                <MdMenu className="text-blue-400 w-7 h-7" />
              )}
            </button>

            <ul
              className={`   md:flex md:space-x-4 text-white absolute md:static   bg-black md:bg-transparent left-0 md:w-auto md:opacity-100 transition-all duration-300 ease-in-out  ${
                open ? "top-[60px] pb-10  opacity-[100]" : "top-full opacity-0"
              } flex flex-col md:flex-row items-start px-8 pt-2 space-y-3 md:space-y-0 md:space-x-4 w-full md:w-auto`}
            >
              {Links.map((link) => (
                <li
                  key={link.name}
                  className={` relative group font-display  border-b-1 border-transparent text-md sm:text-md md:text-md lg:text-lg   hover:text-blue-400   ${
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
