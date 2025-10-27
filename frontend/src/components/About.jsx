import React from "react";
import ProfileImage from "../assets/IMG_1936.JPG";

function About() {
  return (
    <section id="about" className="">
      <div className="min-h-screen py-12 sm:py-16 md:py-20 flex items-center px-4 sm:px-6 lg:px-8">
        <div className="text-center mx-auto">
          <img
            src={ProfileImage}
            alt="Profile"
            className="mt-5 mb-5 rounded-xl w-64 h-auto sm:w-80 mx-auto reveal"
          />
          <h1 className="mt-6 sm:mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-200 font-semibold reveal px-4">
            About Me
          </h1>

          <p className="mt-6 md:mt-10 text-base md:text-lg text-slate-200 mx-auto max-w-4xl px-4 reveal">
            Hello! I'm Calvin Smith, a passionate Data Engineer that loves building scalable data solutions. I also dabble in web development and software engineering.
            When I'm not coding, you can find me practicing martial arts, reading sci-fi novels or playing video games. 
          </p>
        </div>

        {/* <div className="text-center mx-auto reveal">
                </div> */}
      </div>
    </section>
  );
}

export default About;
