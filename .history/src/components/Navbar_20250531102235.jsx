function Navbar() {
  const paths = [
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
        {paths.map((path) => (
          <ul key={path.name}>
            <li>
              <path to={path.}></path>
            </li>
          </ul>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
