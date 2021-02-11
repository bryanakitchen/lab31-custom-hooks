import React from 'react';
import PropTypes from 'prop-types';

function Character({ name, image }) {
  
  return (
    <>
      <figure >
        <img src={image} alt={name} style={{ width: '100px' }}/>
        <figcaption>{name}</figcaption>    
      </figure>    
    </>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
