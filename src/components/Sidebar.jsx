import React, { useState } from 'react';
import { FaBars, FaArrowLeft, FaPlus, FaSearch, FaCompass, FaArrowAltCircleUp } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* Desktop Sidebar (original unchanged) */}
      <div className={`relative bg-black min-h-screen ${isOpen ? 'w-72' : 'w-0'} transition-all hidden md:block`}>
        {isOpen && (
          <div className="h-screen bg-black text-white fixed p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Vivi.ai</h2>
              <button
                onClick={toggleSidebar}
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                <FaArrowLeft size={20} />
              </button>
            </div>

            {/* Rest of desktop sidebar content... */}
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
                  src="https://tse3.mm.bing.net/th?id=OIP.qpKpMvoox3X8ZpQRDLfPDAHaHa&pid=Api&P=0&h=180"
                  alt="Character 1"
                  className="w-9 h-9 rounded-full mr-2"
                />
                <span className="text-gray font-medium">Louis Tomlinsonn</span>
              </div>

              {/* Trip Planner Section */}
              <div className="text-gray-400 text-sm mb-4">This week</div>
              <div className="flex items-center">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.3rQEOZta--HmKCXX7n9SJAHaHa&pid=Api&P=0&h=180"
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
                  src="https://tse4.mm.bing.net/th?id=OIP.hU4EbGMN5J8IS-13JAIQNwHaFj&pid=Api&P=0&h=180"
                  alt="User"
                  className="w-9 h-9 rounded-full mr-2"
                />
                <span className="text-white text-sm mr-3" >Echooo Buddy </span>
                <FaArrowAltCircleUp size={16} className="mr-1" /> 
              </div>
            </div>
          </div>
        )}

        {/* Desktop Menu Icon */}
        {!isOpen && (
          <button
            onClick={toggleSidebar}
            className="fixed top-6 left-6 text-white bg-gray-700 p-2 rounded-full shadow-lg focus:outline-none hover:bg-gray-600 hidden md:block"
          >
            <FaBars size={20} />
          </button>
        )}
      </div>

      {/* Mobile Overlay Sidebar */}
      <div className="md:hidden">
        {/* Mobile Menu Icon */}
        {!isMobileOpen && (
          <button
            onClick={toggleMobileSidebar}
            className="fixed top-6 left-6 z-50 text-white bg-gray-700 p-2 rounded-full shadow-lg focus:outline-none hover:bg-gray-600"
          >
            <FaBars size={20} />
          </button>
        )}

        {/* Mobile Sidebar Content */}
        {isMobileOpen && (
          <div className="fixed inset-0 z-40 bg-black w-72 transition-transform duration-300">
            <div className="h-screen bg-black text-white p-6 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Vivi.ai</h2>
                <button
                  onClick={toggleMobileSidebar}
                  className="text-gray-400 hover:text-white focus:outline-none"
                >
                  <FaArrowLeft size={20} />
                </button>
              </div>

              {/* Mobile Sidebar Content (same as desktop) */}
              <button className="w-2/3 py-3 mb-2 flex items-center bg-gray-800 hover:bg-gray-700 rounded-full text-white text-left px-5">
                <FaPlus size={25} className="mr-3" />
                Create
              </button>

              <button className="w-full py-3 mb-5 flex items-center bg-gray-800 hover:bg-gray-700 rounded-md text-white text-left px-4">
                <FaCompass size={25} className="mr-3" />
                Discover
              </button>

              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search for Characters"
                  className="w-full p-2 bg-gray-800 text-white rounded placeholder-gray-400 focus:outline-none pl-10"
                />
                <FaSearch className="absolute top-3 left-3 text-gray-400" />
              </div>

              <div className="text-gray-400 text-sm mb-4">Yesterday</div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.qpKpMvoox3X8ZpQRDLfPDAHaHa&pid=Api&P=0&h=180"
                    alt="Character 1"
                    className="w-9 h-9 rounded-full mr-2"
                  />
                  <span className="text-gray font-medium">Louis Tomlinsonn</span>
                </div>

                <div className="text-gray-400 text-sm mb-4">This week</div>
                <div className="flex items-center">
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.3rQEOZta--HmKCXX7n9SJAHaHa&pid=Api&P=0&h=180"
                    alt="Character 1"
                    className="w-9 h-9 rounded-full mr-2"
                  />
                  <span className="text-gray font-medium">Trip Planner</span>
                </div>
              </div>

              <div className="absolute bottom-6 ">
                <div className="text-gray-400 text-sm text-center " >
                  <a href="#" className="hover:text-white">Privacy Policy &nbsp;</a>
                  <a href="#" className="hover:text-white">Terms of Service</a>
                </div>

                <div className="border-t border-gray-600 my-3"></div>

                <button className="w-full py-2 mb-4 flex justify-center items-center text-center rounded-full border border-gray-600 text-white">
                  Upgrade to v.ai+
                </button>

                <div className="flex items-center ">
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.hU4EbGMN5J8IS-13JAIQNwHaFj&pid=Api&P=0&h=180"
                    alt="User"
                    className="w-9 h-9 rounded-full mr-2"
                  />
                  <span className="text-white text-sm mr-3" >Echooo Buddy </span>
                  <FaArrowAltCircleUp size={16} className="mr-1" /> 
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;