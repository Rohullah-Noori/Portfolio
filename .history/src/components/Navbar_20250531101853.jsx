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
        {
            Links.map((link)=>(
                <ul key={link.name}>
<li></li>
                </ul>
            )
        }
        <ul>
        <li>

        </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
