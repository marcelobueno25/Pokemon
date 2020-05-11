import React from 'react';
import './style.css';

export default class Card extends React.Component {
    state = {
        name: '',
        imageURL: '',
        pokemonIndex: ''
    };
    
    render() {
      const { name, url } = this.props;
      console.log(this.props);

        return (
            <div className="cardPokemon">
              <h1>{name}</h1>
            </div>
        );
    }
}