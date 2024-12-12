import React from 'react';
import { FaSearch } from 'react-icons/fa';

const RightPane = ({ isSidebarOpen }) => {
  return (
    <div
      className={`transition-all p-6 bg-gray-900 ${isSidebarOpen ? 'pl-16' : 'pl-6'} flex-grow h-screen`}
    >
      {/* Top Section */}
      <div className="flex justify-between items-center mb-6">
        {/* Welcome Back Section */}
        <div>
          <h1 className="text-medium text-white">Welcome back,</h1>
          <div className="flex items-center mt-4">
            <img
              src="https://via.placeholder.com/50"
              alt="User"
              className="w-8 h-8 rounded-full mr-4"
            />
            <p className="text-xl font-medium text-white">LingeringBaboon6743</p>
          </div>
        </div>

        {/* Search Button */}
        <button className="py-3 px-6 flex items-center bg-gray-700 hover:bg-gray-600 rounded-full text-white text-medium">
          <FaSearch className="mr-2" />
          <span className="pr-24">Search for Characters</span>
        </button>
      </div>

      {/* Card Section */}
      <div className="relative w-full h-1/2 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
          autoPlay
          loop
          muted
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Text Content */}
        <div className="absolute top-12 left-12 text-white">
          <h2 className="text-2xl font-semibold">Who do you want to talk to?</h2>
          <p className="text-4xl font-bold mt-2">Epic challenges await!</p>
        </div>

        {/* Smaller Cards on the Right */}
        <div className="absolute top-4 right-4 flex space-x-4">
          {/* First Smaller Card */}
          <div className="w-1/5 h-56 bg-gray-700 rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
              <div className="flex items-center mb-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Character"
                  className="w-9 h-9 rounded-full mr-4"
                />
                <p className="text-white font-semibold">Character 1</p>
              </div>
              <p className="text-gray-300 text-sm mb-4">Brief description of the character goes here. Something cool about them.</p>
              <button className="text-blue-400 hover:text-blue-500 text-sm">Reply...</button>
            </div>
          </div>

          {/* Second Smaller Card */}
          <div className="w-1/5 h-56 bg-gray-700 rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
              <div className="flex items-center mb-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Character"
                  className="w-9 h-9 rounded-full mr-4"
                />
                <p className="text-white font-semibold">Character 2</p>
              </div>
              <p className="text-gray-300 text-sm mb-4">Brief description of the character goes here. Something interesting to know.</p>
              <button className="text-blue-400 hover:text-blue-500 text-sm">Reply...</button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content Placeholder */}
      <div className="text-gray-400 text-sm mt-6">
        <p>Start exploring your characters here!</p>
      </div>
    </div>
  );
};

export default RightPane;
