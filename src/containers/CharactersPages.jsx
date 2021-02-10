import React, { Component } from 'react';
import Loading from '../components/loading/Loading';

export default class CharactersPages extends Component {
  state = {
    loading: true
  }
  
  render() {
    const { loading } = this.state;

    if(loading) return <Loading />;
    return (
      <div>
           Hello     
      </div>
    );
  }
}
