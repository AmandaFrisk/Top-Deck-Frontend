// This is the browser view for all of the cards
// import React, {Component} from 'react'


const PokeCard = ({pokemon}) => {

    return (
      <div className='PokeCard'>
        <img className='poke-img' src={pokemon.images.small}/>
      </div>
    )

}

export default PokeCard;
