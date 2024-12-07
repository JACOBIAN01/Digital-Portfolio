import React from "react";


function Hero(){
    return (
      <>
        <section className="bg-gradient-to-r from-purple-700 to-pink-500 text-white h-screen flex flex-col justify-center items-center text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-pulse">
              Portfolio Under Development
            </h1>
            <p className="text-xl sm:text-2xl mb-6 font-semibold ">
              I'm working hard to bring you a complete portfolio experience.
              Stay tuned!
            </p>
          </div>
        </section>
      </>
    );
}


export default Hero;