import React from 'react';

function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-8">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl w-full">
        {/* Left Side */}
        <div className="text-center lg:text-left flex-1 animate-slidein300">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent animate-text">
            Pranav Sanjeev Gaonkar
          </h1>
          <p className="text-lg text-gray-400 mb-6 animate-slidein500">
            Hello, I'm Pranav S Gaonkar, currently pursuing a Bachelor of Engineering in Computer Science at SDM College of Engineering and Technology, Dharwad. With a strong foundation in software development and a passion for technology.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center animate-slidein700">
          <img
            src="/Pranav_Profile.jpg" // Replace with your profile image file name
            alt="Profile"
            className="rounded-full w-64 h-64 object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Links Section */}
      <div className="mt-12 flex flex-col md:flex-row gap-8 items-center">
        {/* GitHub */}
        <div className="text-center p-4 w-48">
          <a
            href="https://github.com/pranavgaonkar12"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center"
          >
            <div className="flex justify-center items-center overflow-hidden rounded-md h-32 w-32 mx-auto">
              <img
                className="object-contain w-full h-full hover:scale-125 transition-transform duration-500"
                src="/Octicons-mark-github.svg.png" // Replace with your GitHub icon file
                alt="GitHub"
              />
            </div>
            <h3 className="text-2xl py-4 text-gray-300 hover:text-white">
              GitHub
            </h3>
          </a>
        </div>

        {/* HackerRank */}
        <div className="text-center p-4 w-48">
          <a
            href="https://www.hackerrank.com/profile/PranavSg67"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center"
          >
            <div className="flex justify-center items-center overflow-hidden rounded-md h-32 w-32 mx-auto">
              <img
                className="object-contain w-full h-full hover:scale-125 transition-transform duration-500"
                src="/HackerRank_Icon-1000px.png" // Replace with your HackerRank icon file
                alt="HackerRank"
              />
            </div>
            <h3 className="text-2xl py-4 text-gray-300 hover:text-white">
              HackerRank
            </h3>
          </a>
        </div>

        {/* LeetCode */}
        <div className="text-center p-4 w-48">
          <a
            href="https://leetcode.com/u/pranavgaonkar18112003/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center"
          >
            <div className="flex justify-center items-center overflow-hidden rounded-md h-32 w-32 mx-auto">
              <img
                className="object-contain w-full h-full hover:scale-125 transition-transform duration-500"
                src="/LeetCode_logo_black.png" // Replace with your LeetCode icon file
                alt="LeetCode"
              />
            </div>
            <h3 className="text-2xl py-4 text-gray-300 hover:text-white">
              LeetCode
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
