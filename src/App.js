const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white py-5">
      <div className="container flex mx-auto justify-between">
      <h2 className="text-2xl font-semibold">Subhadeep's Portfolio</h2>
        <ul className="flex space-x-5 ">
          <li className="">
            <a href="aboutme">About Me</a>
          </li>
          <li>
            <a href="exp">Experience</a>
          </li>
          <li>
            <a href="skill">Skills</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
