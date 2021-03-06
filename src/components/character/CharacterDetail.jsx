import React from 'react';
import PropTypes from 'prop-types';

function CharacterDetail({ character }) {
  return (
    <figure data-testid="character">
      <img src={character.image} alt={character.name} />
      <figcaption>{character.name}</figcaption>     
    </figure>
  );
}
// add more after all is connected - THIS IS NOT RESTRUCTURED
CharacterDetail.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default CharacterDetail;
