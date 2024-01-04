import React from 'react'

export const Card = ({pokemon}) => {
  return (
    <div className='card'>
        <div className='cardImg'>
            <img src={pokemon.sprites.front_default}/>
        </div>
        <h3 className='cardName'>{pokemon.name}</h3>
        <div className='cardTypes'>
            
        </div>
    </div>
  );
};

export default Card;