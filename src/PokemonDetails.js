import React from 'react';
import './pokemon.css';

class PokemonDetails extends React.Component {
   render() {
    const { name, type, averageWeight, image, summary, foundAt } = this.props.location.state.pokemon;
    return (
      <div className="pokedex">
        <h2>{ name } Details</h2>
        <div className="pokemon">
          <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>
              Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
            </p>
          </div>
          <img src={image} alt={`${name} sprite`} />
        </div>
        <h2>Summary</h2>
        <div>
          <p>{summary}</p>
        </div>
        <h2>Game Locations of {name}</h2>
        <div className="pokedex">
          {foundAt.map(({ map, location }) => (
            <div className="pokemon">
              <img src={map} alt={`${location} map`} />
              <p>{location}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PokemonDetails;
