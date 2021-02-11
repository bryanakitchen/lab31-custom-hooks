import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';
import { useTheme } from '../../state/themeContext';
import styles from './CharacterList.css';

function CharacterList({ characters }) {
  const { theme } = useTheme();

  const characterElements = characters.map(character => (
    <li key={character.id} >
      <Link to={`/character/${character.id}`} 
        style={{ textDecoration: 'none' }}>
        <Character name={character.name} image={character.image} /> 
      </Link>
    </li>
  ));
  
  return (
    <ul data-testid="characters" className={`${styles[theme]}`} >
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
