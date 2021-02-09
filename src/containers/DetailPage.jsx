import React from 'react';
import PropTypes from 'prop-types';
import CharacterDetail from '../components/character/CharacterDetail';
import Loading from '../components/loading/Loading';
import { useSingleCharacter } from '../hooks/characters';

const DetailPage = ({ match }) => {
  const { loading, character } = useSingleCharacter(match.params.id);
    
  console.log(character);

  if(loading) return <Loading />;

  return <CharacterDetail character={character} />;
};

DetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default DetailPage;
