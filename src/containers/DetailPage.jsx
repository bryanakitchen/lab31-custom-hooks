import React from 'react'
import CharacterDetail from '../components/character/CharacterDetail';
import Loading from '../components/loading/Loading'

export default function DetailPage() {
    
    
  if(loading) return <Loading />;

  return <CharacterDetail character={character} />;
}
