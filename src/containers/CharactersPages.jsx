import React from 'react';
import CharacterList from '../components/character/CharacterList';
import { useCharacters } from '../hooks/characters';

export default function CharactersPages() {
  const { loading, characters } = useCharacters();

  if(loading) return 'Loading...';
  
  return <CharacterList characters={characters} />;
}
