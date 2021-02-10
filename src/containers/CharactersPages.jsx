import React, { Component } from 'react';
import CharacterList from '../components/characters/CharacterList';
import Loading from '../components/loading/Loading';

export default class CharactersPages extends Component {
  state = {
    loading: true,
    characters: []
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 500);
  }

  render() {
    const { loading, characters } = this.state;

    if(loading) return <Loading />;
    return (
      <CharacterList characters={characters} />
    );
  }
}
