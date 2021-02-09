import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharactersPages from '../../containers/CharactersPages';
import Character from '../character/Character';
import Header from '../header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>

        <Route exact path="/" component={CharactersPages} />

        <Route exact path="/character/:name" component={Character} />

      </Switch>
    </Router>
  
  );
}
