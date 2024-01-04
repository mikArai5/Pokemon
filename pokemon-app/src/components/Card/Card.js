import React from 'react'

export const Card = ({pokemon}) => {
  return (
    <div className='card'>
        <div className='cardImg'>
            <img src={pokemon.sprites.front_default}/>
        </div>
        <h3 className='cardName'>{pokemon.name}</h3>
        <div className='cardTypes'>
            <div>タイプ</div>
            {pokemon.types.map((type) => {
              return (
                <div>
                  <span className='typeName'>{type.type.name}</span>
                </div>
              );
            })}
        </div>
        <div className='cardInfo'>
          
        </div>
    </div>
  );
};

export default Card;