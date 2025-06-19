import Link from "react-router";
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
    <div>
      <nav>
        <ul>
          {Links.map((link) => (
            <li>
              <link></link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
