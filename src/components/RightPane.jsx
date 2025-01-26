import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { CHARACTER_PROFILES } from '../api/characters';

const RightPane = ({ isSidebarOpen }) => {
  const CHARACTER_IMAGES = {
    character1: 'https://tse1.mm.bing.net/th?id=OIP.p9XCbqYs8x01qDmBgX0icAHaD3&pid=Api&P=0&h=180',
    character2: 'https://www.exercise.com/blog/wp-content/uploads/2017/08/personal-trainer-motivates-client-doing-push-ups_73589162-1600x1600.jpg',
    character3: 'https://tse4.mm.bing.net/th?id=OIP.I1rGFOkJHirM44VQFjJaTQHaE7&pid=Api&P=0&h=180',
    character4: 'https://tse2.mm.bing.net/th?id=OIP.P-8-pLSSCqJu8s9kGzmZugHaE_&pid=Api&P=0&h=180',
    character5: 'https://tse4.mm.bing.net/th?id=OIP.8oh30P8nzkOjK-_4MDGpqQHaEJ&pid=Api&P=0&h=180',
    character6: 'https://tse4.mm.bing.net/th?id=OIP.62Nvhi_DRorTq8WQaeDNZgAAAA&pid=Api&P=0&h=180',
    character7: 'https://tse4.mm.bing.net/th?id=OIP.kwykdE_RasneAd11gLYycwHaE8&pid=Api&P=0&h=180',
    character8: 'https://tse3.mm.bing.net/th?id=OIP.M2EN7KITRjxf3TPf0C0_hgHaEK&pid=Api&P=0&h=180'
  };

  const gridCharacters = Object.keys(CHARACTER_PROFILES)
    .filter(key => key.startsWith('character'))
    .sort((a, b) => parseInt(a.replace('character', '')) - parseInt(b.replace('character', '')));

  return (
    <div
      className={`transition-all p-6 bg-gray-900 ${isSidebarOpen ? 'md:pl-16' : 'md:pl-6'} flex-grow h-screen overflow-y-scroll`}
    >
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="w-full md:w-auto flex flex-col items-end md:items-start">
          <h1 className="text-medium text-white text-right md:text-left">Welcome back,</h1>
          <div className="flex items-center justify-end md:justify-start mt-4">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.hU4EbGMN5J8IS-13JAIQNwHaFj&pid=Api&P=0&h=180"
              alt="User"
              className="w-8 h-8 rounded-full mr-4"
            />
            <p className="text-xl font-medium text-white">EchoBuddy</p>
          </div>
        </div>

        <button className="py-3 px-4 md:px-6 flex items-center bg-gray-700 hover:bg-gray-600 rounded-full text-white text-medium w-full md:w-auto">
          <FaSearch className="mr-2" />
          <span className="hidden md:inline pr-0 md:pr-24">Search for Characters</span>
        </button>
      </div>

      {/* Main Card Section */}
      <div className="relative w-full h-64 md:h-1/2 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
          autoPlay
          loop
          muted
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-4 left-4 md:top-12 md:left-12 text-white">
          <h2 className="text-xl md:text-2xl font-semibold">Who do you want to talk to?</h2>
          <p className="text-2xl md:text-4xl font-bold mt-2">Epic challenges await!</p>
        </div>

        {/* Desktop Cards */}
        <div className="hidden md:flex absolute top-12 right-4 space-x-4">
          <div
            className="w-48 h-56 rounded-lg overflow-hidden shadow-lg"
            style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/cute-nurse-holding-syringe-cartoon-vector-illustration_138676-2764.jpg)', backgroundSize: 'cover' }}
          >
            <div className="p-4 bg-gray-900 bg-opacity-60 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <img
                    src="https://tse1.mm.bing.net/th?id=OIP.7qbwrRwYCV9-OEf9MSFToQHaJF&pid=Api&P=0&h=180"
                    alt="Character"
                    className="w-9 h-9 rounded-full mr-4"
                  />
                  <p className="text-white font-semibold">Nurse</p>
                </div>
                <p className="text-gray-300 text-sm mb-4">A compassionate healer with unmatched dedication to her craft.</p>
              </div>
              <button className="text-blue-400 hover:text-blue-500 text-sm">Reply...</button>
            </div>
          </div>

          <div
            className="w-48 h-56 rounded-lg overflow-hidden shadow-lg"
            style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/anime-samurai-warrior-holding-sword_52683-44986.jpg)', backgroundSize: 'cover' }}
          >
            <div className="p-4 bg-gray-900 bg-opacity-60 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <img
                    src="https://tse1.mm.bing.net/th?id=OIP.XBNOASW9Tf-WfgNrGL0RKwHaIW&pid=Api&P=0&h=180"
                    alt="Character"
                    className="w-9 h-9 rounded-full mr-4"
                  />
                  <p className="text-white font-semibold">Gojo</p>
                </div>
                <p className="text-gray-300 text-sm mb-4">A powerful sorcerer known for his wit and incredible abilities.</p>
              </div>
              <button className="text-blue-400 hover:text-blue-500 text-sm">Reply...</button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden flex overflow-x-auto space-x-4 py-4 pl-4 -mx-4">
        <div className="flex-shrink-0 w-48 h-56 rounded-lg overflow-hidden shadow-lg bg-cover bg-center"
          style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/cute-nurse-holding-syringe-cartoon-vector-illustration_138676-2764.jpg)' }}>
          <div className="p-4 bg-gray-900 bg-opacity-60 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.7qbwrRwYCV9-OEf9MSFToQHaJF&pid=Api&P=0&h=180"
                  alt="Character"
                  className="w-9 h-9 rounded-full mr-4"
                />
                <p className="text-white font-semibold">Nurse</p>
              </div>
              <p className="text-gray-300 text-sm mb-4">A compassionate healer with unmatched dedication to her craft.</p>
            </div>
            <button className="text-blue-400 hover:text-blue-500 text-sm">Reply...</button>
          </div>
        </div>

        <div className="flex-shrink-0 w-48 h-56 rounded-lg overflow-hidden shadow-lg bg-cover bg-center"
          style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/anime-samurai-warrior-holding-sword_52683-44986.jpg)' }}>
          <div className="p-4 bg-gray-900 bg-opacity-60 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.XBNOASW9Tf-WfgNrGL0RKwHaIW&pid=Api&P=0&h=180"
                  alt="Character"
                  className="w-9 h-9 rounded-full mr-4"
                />
                <p className="text-white font-semibold">Gojo</p>
              </div>
              <p className="text-gray-300 text-sm mb-4">A powerful sorcerer known for his wit and incredible abilities.</p>
            </div>
            <button className="text-blue-400 hover:text-blue-500 text-sm">Reply...</button>
          </div>
        </div>
      </div>

      {/* Character Grid Section */}
      <div className="text-gray-400 text-sm mt-6">
        <p className="text-xl">Start exploring your characters here!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {gridCharacters.map((characterKey) => {
            const character = CHARACTER_PROFILES[characterKey];
            const imageUrl = CHARACTER_IMAGES[characterKey] || 'https://via.placeholder.com/150';

            return (
              <div
                key={characterKey}
                className="flex items-center bg-gray-800 rounded-lg overflow-hidden shadow-lg h-32 cursor-pointer hover:bg-gray-700 transition-colors"
                onClick={() => window.open(`/chat/${characterKey}`, '_blank')}
              >
                <img
                  src={imageUrl}
                  alt={character.name}
                  className="w-24 h-full object-cover"
                />
                <div className="p-4">
                  <p className="text-white font-semibold">{character.name}</p>
                  <p className="text-gray-300 text-sm">{character.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightPane;