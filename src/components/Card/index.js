import React from 'react';
import './style.css';
import styled from 'styled-components';

const Sprite = styled.img`
  width: 5em;
  height: 5em;
`;

export default class Card extends React.Component {
    state = {
        name: '',
        url: '',
        imageURL: '',
        pokemonIndex: '',
        imageLoading: true,
        toManyRequests: false
    };

    componentDidMount() {
      const { name, url } = this.props;
      const pokemonIndex = url.split('/')[url.split('/').length - 2];
      const imageURL = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

      this.setState({ name, url, imageURL, pokemonIndex });
    }
    
    render() {
        return (
            <div className="cardPokemon">
              <h1>{this.state.name}</h1>
              <Sprite  
              onLoad={() => this.setState({ imageLoading: false })}
              onError={() => this.setState({ toManyRequests: true })}
              src={this.state.imageURL}
              />
            </div>
        );
    }
}