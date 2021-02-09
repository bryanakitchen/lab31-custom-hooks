import { useState, useEffect } from 'react';
import { getAllCharacters, getCharacter } from '../services/fetchAPI';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getAllCharacters()
      .then(characters => {
        setCharacters(characters);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    characters
  };

};

export const useSingleCharacter = () => {
   
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);
  
  useEffect(() => {
    getCharacter()
      .then(character => {
        setCharacter(character);
        setLoading(false);
      });
  }, []);
  
  return {
    loading,
    character
  };
  
};
