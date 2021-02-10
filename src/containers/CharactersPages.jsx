import React from 'react';
import CharacterList from '../components/character/CharacterList';
import Loading from '../components/loading/Loading';
import { useCharacters } from '../state/charactersHooks';
import { useTheme } from '../state/themeContext';
import styles from './CharactersPages.css';

export default function CharactersPages() {
  const { loading, characters } = useCharacters();
  const { theme } = useTheme();

  if(loading) return <Loading />;
  
  return (
    <div className={`${styles[theme]}`}>
      <CharacterList characters={characters} />
    </div>
  );
}
