import React from 'react';
import Card from '../../components/Card';
import axios from 'axios';

export default class Home extends React.Component {
state = {
  url: 'https://pokeapi.co/api/v2/pokemon/',
  pokemons: null
};

async componentDidMount(){
  const res = await axios.get(this.state.url);
  this.setState({pokemons: res.data['results']});
}

  render() {
    return (
      <React.Fragment>
        {this.state.pokemons ? (
          <React.Fragment>
          {this.state.pokemons.map(pokemon => (
              <Card 
              key={pokemon.name}
              name={pokemon.name} 
              url={pokemon.url}
              teste={pokemon}
              />
          ))}
          </React.Fragment>
        ) : (
          <h3>Loading Pokemon</h3>
        )}
      </React.Fragment>
    );
  }
}