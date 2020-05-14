import React from 'react';
import './style.scss';
import axios from 'axios';


export default class Card extends React.Component {
  state = {
    name: '',
    url: '',
    imageURL: '',
    pokemonIndex: ''
  };

  async componentDidMount() {
    const { name, url } = this.props;
    const res = await axios.get(url);
    console.log(res.data);
    const pokemonIndex = res.data.id;
    const imageURL = res.data.sprites.front_default;
    this.setState({ name, url, imageURL, pokemonIndex });
  }

  render() {
    return (
      <div className="cardPokemon">
        <h1>{this.state.name}</h1>
        <h4>{this.state.pokemonIndex}</h4>
        <img alt="pokemon" src={this.state.imageURL} />
      </div>
    );
  }
}