import React from 'react';
import Card from '../../components/Card';
import axios from 'axios';
import './style.scss';

export default class Home extends React.Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon?limit=20/',
    pokemons: null
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    console.log(res);
    this.setState({ pokemons: res.data['results'] });
  }

  render() {
    return (
      <div id="home">
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
      </div>
    );
  }
}