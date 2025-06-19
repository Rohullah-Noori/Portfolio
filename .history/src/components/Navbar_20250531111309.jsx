import { Link, useLocation } from "react-router-dom";
import Container from "./Container";

function Navbar() {
  const pathname = useLocation().pathname;
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
            <h1 className="font-bold text-lg ">Rohullah </h1>
            <ul className="flex space-x-4 text-black">
              {Links.map((link) => (
                <li
                  key={link.name}
                  className={` relative grou[]  border-b-2 border-transparent hover:border-blue-500     ${
                    pathname === link.path ? "text-blue-500 " : ""
                  }`}
                >
                  <Link to={link.path}>{link.name}</Link>
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
