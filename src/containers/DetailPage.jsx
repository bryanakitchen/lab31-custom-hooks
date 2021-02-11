import React from 'react';
import PropTypes from 'prop-types';
import CharacterDetail from '../components/character/CharacterDetail';
import Loading from '../components/loading/Loading';
import { useSingleCharacter } from '../state/charactersHooks';
import { useTheme } from '../state/themeContext';
import styles from './DetailPage.css';

const DetailPage = ({ match }) => {
  const { loading, character } = useSingleCharacter(match.params.id);
  const { theme } = useTheme();

  if(loading) return <Loading />;

  return (
    <div className={`${styles[theme]}`}>
      <CharacterDetail character={character} />
    </div>
  );
};

DetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default DetailPage;
