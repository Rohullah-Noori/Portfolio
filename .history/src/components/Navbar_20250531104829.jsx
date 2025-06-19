import { Link } from "react-router-dom";
import Container from "./Container";

function Navbar() {
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
    <Container>
      <div className="flex justify-end items-center p-4 shadow-md">
        <nav>
          <div className="flex justify-between items-center w-full">
            <div>
              <h1>Rohullah</h1>
            </div>
            <div>
              <ul className="flex space-x-4 text-black">
                {Links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </Container>
  );
}

export default Navbar;
