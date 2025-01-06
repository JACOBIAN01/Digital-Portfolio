import React from "react";

function Hero(){
    return (
      <>
        <div className="bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Subhadeep Ghorai</h1>
            <p className="text-xl mb-6">
              Certified STEM Educator | ECE Graduate | MERN Stack Developer
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/JACOBIAN01"
              target="_blank"
              className="px-6 py-4 bg-black rounded-md hover:bg-gray-800"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/subhadeep-ghorai/"
              target="_blank"
              className="px-6 py-4 bg-blue-950 rounded-md hover:bg-blue-600"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </>
    );
}


export default Hero;