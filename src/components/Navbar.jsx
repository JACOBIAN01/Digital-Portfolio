import React from "react";

function Navbar() {
  return (
    <>
      <nav>
        <div className="bg-blue-900 text-white flex justify-between items-center p-4">
          <div className="mx-5 text-lg font-bold">Subhadeep's Portfolio</div>
          <div className="mx-10 space-x-10 font-semibold">
            <a
              href="#about"
              className="hover:text-blue-300 transition duration-200"
            >
              About
            </a>
            <a
              href="#experience"
              className="hover:text-blue-300 transition duration-300"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="hover:text-blue-300 transition duration-300"
            >
              Skills
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
