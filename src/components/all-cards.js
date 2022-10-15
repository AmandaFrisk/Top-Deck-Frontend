// This is the browser view for all of the cards
// import React, {Component} from 'react'
// import AddCardBtn from './add-card-btn'


const PokeCard = ({pokemon}) => {

    return (
      <div className='PokeCard'>
        <img className='poke-img' src={pokemon.images.small} alt={pokemon.name}/>
        {/*<AddCardBtn pokemon={pokemon}/>*/}
      </div>
    )

}

export default PokeCard;
