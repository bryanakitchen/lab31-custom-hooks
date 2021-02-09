import React from 'react';
import PropTypes from 'prop-types';

function Character({ name, url }) {
  return (
    <>
      <figure>
        <img src={url} />
        <figcaption>{name}</figcaption>    
      </figure>    
    </>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Character;
