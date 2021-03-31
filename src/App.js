import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Switch>
        <Route exact path="/" component={ () => <Pokedex pokemons={pokemons} /> } />
      </Switch>
    </div>
  );
}

export default App;