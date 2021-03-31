import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import pokemons from './data';
import Pokedex from './Pokedex';
import NotFound from './notFound';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Switch>
        <Route exact path="/" component={ () => <Pokedex pokemons={pokemons} /> } />
        <Route path="/" component={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;