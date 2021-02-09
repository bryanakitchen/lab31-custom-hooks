import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

// add link around Character when finished
function CharacterList({ characters }) {

  const characterElements = characters.map(character => (
    <li key={character.id}>
      <Character name={character.name} image={character.image} /> 
    </li>
  ));
  
  return (
    <ul data-testid="characters">
      {characterElements}
    </ul>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }))
};

export default CharacterList;