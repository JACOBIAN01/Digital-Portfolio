import React from "react";


function Navbar(){
  return (
    <>
      <nav className="bg-gray-800 text-white">
        <div className="flex">
          <div>Subhadeep's Portfolio</div>
          <div className="justify-center">
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Experience</a>
          </div>
        </div>
      </nav>
    </>
  );
}


export default Navbar;
