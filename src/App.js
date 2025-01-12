import React from 'react';
import { BackgroundGradientAnimation } from './ui/BackgroundGradientAnimation'; // Make sure to import the component

// Import images
import profileImage from './assets/images/Pranav_Profile.jpg';
import githubIcon from './assets/images/Octicons-mark-github.svg.png';
import hackerRankIcon from './assets/images/HackerRank_Icon-1000px.png';
import leetCodeIcon from './assets/images/LeetCode_logo_black.png';
import emailIcon from './assets/images/gmail.png';

function App() {
  return (
    <BackgroundGradientAnimation>
      <div className="text-white min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
        {/* Profile Section */}
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-full w-40 h-40 p-1 animate-borderPulse bg-gradient-to-r from-transparent via-transparent to-transparent border-4">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-full w-full h-full object-cover shadow-md"
            />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent mt-4 text-center">
            Pranav Sanjeev Gaonkar
          </h1>
          <p className="text-sm font-bold text-black mt-2 text-center">
              Bachelor of Engineering in Computer Science | SDM College of Engineering and Technology
          </p>

        </div>

        {/* Links Section */}
        <div className="mt-8 flex flex-col gap-4 w-full max-w-sm">
          {/* GitHub */}
          <a
            href="https://github.com/pranavgaonkar12"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex items-center gap-3 px-4 py-3 bg-gray-800 rounded-lg shadow overflow-hidden"
          >
            <div
              className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
            ></div>
            <img
              src={githubIcon}
              alt="GitHub"
              className="relative w-8 h-8 object-contain"
            />
            <span className="relative text-lg">GitHub</span>
          </a>

          {/* HackerRank */}
          <a
            href="https://www.hackerrank.com/profile/PranavSg67"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex items-center gap-3 px-4 py-3 bg-gray-800 rounded-lg shadow overflow-hidden"
          >
            <div
              className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
            ></div>
            <img
              src={hackerRankIcon}
              alt="HackerRank"
              className="relative w-8 h-8 object-contain"
            />
            <span className="relative text-lg">HackerRank</span>
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/pranavgaonkar18112003/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex items-center gap-3 px-4 py-3 bg-gray-800 rounded-lg shadow overflow-hidden"
          >
            <div
              className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
            ></div>
            <img
              src={leetCodeIcon}
              alt="LeetCode"
              className="relative w-8 h-8 object-contain"
            />
            <span className="relative text-lg">LeetCode</span>
          </a>

          {/* Email */}
          <a
            href="mailto:pg2601236@gmail.com"
            className="relative group flex items-center gap-3 px-4 py-3 bg-gray-800 rounded-lg shadow overflow-hidden"
          >
            <div
              className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
            ></div>
            <img
              src={emailIcon}
              alt="emailIcon"
              className="relative w-8 h-8 object-contain"
            />
            <span className="relative text-lg">Email</span>
          </a>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}

export default App;
