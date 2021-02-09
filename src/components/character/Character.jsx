import React from 'react';
import PropTypes from 'prop-types';

function Character({ name, photo }) {
  return (
    <>
      <figure>
        <img src={photo} alt={name} />
        <figcaption>{name}</figcaption>    
      </figure>    
    </>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired
};

export default Character;
