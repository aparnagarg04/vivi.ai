import React from 'react';

const CharacterCard = ({ character }) => {
  return (
    <div className="w-48 bg-gray-700 rounded-lg p-4 shadow-lg text-center">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-32 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-bold text-white">{character.name}</h3>
      <p className="text-sm text-gray-400 mt-2">{character.description}</p>
    </div>
  );
};

export default CharacterCard;