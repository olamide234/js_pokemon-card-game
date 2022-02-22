import React, { Component } from 'react'
import Pokedex from './Pokedex'

export default class pokegame extends Component {
    static defaultProps = {
        pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experiment: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experiment: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experiment: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experiment: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experiment: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experiment: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experiment: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experiment: 65},
        ]
    };
    render() {
        let hand1 =[];
        let hand2 = [...this.props.pokemon]
        while(hand1.length < hand2.length){
            let randIdx = Math.floor(Math.random() * hand2.length);
            let randPokemon = hand2.splice(randIdx, 1)[0];
            hand1.push(randPokemon);
        }
        let exp1 = hand1.reduce((exp, pokemon) => (exp + pokemon.base_experiment), 0);
        let exp2 = hand2.reduce((exp, pokemon) => (exp + pokemon.base_experiment), 0);
        return (
            <div>
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1>exp2}/>
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2>exp1}/>
            </div>
        )
    }
}
