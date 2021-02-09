import React from 'react';
import PropTypes from 'prop-types';

function CharacterDetail({ character }) {
  return (
    <figure>
      <img src={character.image} alt={character.name} />
      <figcaption>{character.name}</figcaption>     
    </figure>
  );
}
// add more after all is connected
CharacterDetail.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default CharacterDetail;

