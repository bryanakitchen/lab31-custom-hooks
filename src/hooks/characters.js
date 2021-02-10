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

export const useSingleCharacter = (id) => {
   
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});
  
  useEffect(() => {
    getCharacter(id)
      .then(character => {
        setCharacter(character);
        setLoading(false);
      });
  }, [id]);
  
  return {
    loading,
    character
  };
  
};
