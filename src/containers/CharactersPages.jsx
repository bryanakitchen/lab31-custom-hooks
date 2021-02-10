import React, { Component } from 'react';
import CharacterList from '../components/characters/CharacterList';
import Loading from '../components/loading/Loading';
import { getAllCharacters } from '../services/fetchAPI';

export default class CharactersPages extends Component {
  state = {
    loading: true,
    characters: []
  }
  
  componentDidMount() {
    getAllCharacters()
      .then(characters => {
        this.setState({ characters, loading: false });
      });
  }

  render() {
    const { loading, characters } = this.state;

    if(loading) return <Loading />;
    return (
      <CharacterList characters={characters} />
    );
  }
}
