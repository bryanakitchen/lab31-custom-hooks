import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';
import { useTheme } from '../../state/themeContext';

function CharacterList({ characters }) {
  // const { theme } = useTheme();
  // className={`${styles[theme]}`}

  const characterElements = characters.map(character => (
    <li key={character.id}>
      <Link to={`/character/${character.id}`}>
        <Character name={character.name} image={character.image} /> 
      </Link>
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
