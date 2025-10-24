import React from "react";
import ProfileImage from "../assets/IMG_1936.JPG";

function About() {
  return (
    <section id="about" className="min-h-screen py-12 sm:py-16 md:py-20">
      <div className="h-250 flex items-center px-4 sm:px-6 lg:px-8">
        <div className="text-center mx-auto reveal">
          <img
            src={ProfileImage}
            alt="Profile"
            className="mt-5 mb-5 rounded-xl w-64 h-auto sm:w-80 mx-auto reveal-up"
          />
          <h1 className="mt-6 sm:mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-200 font-semibold reveal-left px-4">
            About Me
          </h1>

          {/* <p className="text-white text-xl mt-5 reveal-right mx-auto max-w-4xl">
              
          </p> */}
        </div>

        {/* <div className="text-center mx-auto reveal">
                </div> */}
      </div>
    </section>
  );
}

export default About;
