import React from "react";

const Hero = () => (
  <section className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-purple-400 to-blue-500 text-white text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Pranav</h1>
    <p className="text-lg md:text-2xl">Frontend Developer | React Enthusiast</p>
    <button className="mt-6 px-6 py-3 bg-white text-purple-500 font-medium rounded shadow hover:bg-purple-100">
      View My Work
    </button>
  </section>
);

export default Hero;
