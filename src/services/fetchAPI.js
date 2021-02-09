export const getAllCharacters = () => {
  return fetch('https://ac-vill.herokuapp.com/villagers')
    .then(res => res.json())
    .then(characters => characters.map(character => ({
      id: character._id,
      name: character.name,
      image: character.image
    })));
};


export const getCharacter = (id) => {
  return fetch(`https://ac-vill.herokuapp.com/villagers/${id}`)
    .then(res => res.json())
    .then(character => character.map(item => ({ item })));
};
