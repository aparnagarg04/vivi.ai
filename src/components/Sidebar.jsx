import React, { useState } from 'react';
import { FaBars, FaArrowLeft, FaPlus, FaSearch, FaCompass, FaArrowAltCircleUp } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative bg-black min-h-screen ${isOpen ? 'w-72' : 'w-0'} transition-all`}>
      {/* Sidebar */}
      {isOpen && (
        <div className="h-screen bg-black text-white fixed p-6 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">v.ai</h2>
            <button
              onClick={toggleSidebar}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <FaArrowLeft size={20} />
            </button>
          </div>

          {/* Create Button */}
          <button className="w-2/3 py-3 mb-2 flex items-center bg-gray-800 hover:bg-gray-700 rounded-full text-white text-left px-5">
            <FaPlus size={25} className="mr-3" />
            Create
          </button>

          {/* Discover Button */}
          <button className="w-full py-3 mb-5 flex items-center bg-gray-800 hover:bg-gray-700 rounded-md text-white text-left px-4">
            <FaCompass size={25} className="mr-3" />
            Discover
          </button>

          {/* Search Input */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search for Characters"
              className="w-full p-2 bg-gray-800 text-white rounded placeholder-gray-400 focus:outline-none pl-10"
            />
            <FaSearch className="absolute top-3 left-3 text-gray-400" />
          </div>

          {/* History Section */}
          <div className="text-gray-400 text-sm mb-4">Yesterday</div>
          <div className="space-y-4">
            {/* Character 1 */}
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="Character 1"
                className="w-9 h-9 rounded-full mr-2"
              />
              <span className="text-gray font-medium">Louis Tomlinsonn</span>
            </div>

            {/* Trip Planner Section */}
            <div className="text-gray-400 text-sm mb-4">This week</div>
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="Character 1"
                className="w-9 h-9 rounded-full mr-2"
              />
              <span className="text-gray font-medium">Trip Planner</span>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-6 ">

            {/* Links */}
            <div className="text-gray-400 text-sm text-center " >
              <a href="#" className="hover:text-white">Privacy Policy &nbsp;</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>

            {/* Horizontal Line */}
            <div className="border-t border-gray-600 my-3"></div>

            {/* Upgrade Button */}
            <button className="w-full py-2 mb-4 flex justify-center items-center text-center rounded-full border border-gray-600 text-white">
              Upgrade to v.ai+
            </button>

            {/* User Profile Image */}
            <div className="flex items-center ">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="w-9 h-9 rounded-full mr-2"
              />
              <span className="text-white text-sm mr-3" >LingeringBaboon6743 </span>
              <FaArrowAltCircleUp size={16} className="mr-1" /> 
            </div>
          </div>
        </div>
      )}

      {/* Menu Icon */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-6 left-6 text-white bg-gray-700 p-2 rounded-full shadow-lg focus:outline-none hover:bg-gray-600"
        >
          <FaBars size={20} />
        </button>
      )}
    </div>
  );
};

export default Sidebar;
