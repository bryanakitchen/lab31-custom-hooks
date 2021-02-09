export const getAllCharacters = () => {
  return fetch('https://ac-vill.herokuapp.com/villagers')
    .then(res => res.json())
    .then(characters => characters.map(character => ({
      id: character._id,
      name: character.name,
      image: character.image
    })));
};

