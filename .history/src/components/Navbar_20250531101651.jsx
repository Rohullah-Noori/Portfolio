function Navbar() {
  const Links = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "About",
      link: "/about",
    },
  ];

  return (
    <div>
      <nav>
        <ul>
          <li>
            <link to="/about">About</link>
          </li>
          <li>
            <link to="/about">Projects</link>
          </li>
          <li>
            <link to="/about">Services</link>
          </li>
          <li>
            <link to="/about">Contact</link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
