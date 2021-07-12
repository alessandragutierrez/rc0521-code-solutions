import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

class PokedexList extends React.Component {
  listItems() {
    const pokedex = this.props.pokedex;
    return (
      pokedex.map(pokemon =>
        <li key={pokemon.number}>{pokemon.name}</li>
      )
    );
  }

  render() {
    const listOfPokemon = this.listItems();
    return (
      <ul>{listOfPokemon}</ul>
    );
  }
}

ReactDOM.render(
  <PokedexList pokedex={pokedex}/>,
  document.querySelector('#root')
);
