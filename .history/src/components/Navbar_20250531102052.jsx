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
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div>
      <nav>
        {Links.map((link) => (
          <ul key={link.name}>
            <li>
              <Links></Links>
            </li>
          </ul>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
