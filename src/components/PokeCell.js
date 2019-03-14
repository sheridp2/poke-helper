import React from 'react';
import './styles/PokeCell.css';
import sprite from '../assets/sprites.png'

const PokeCell = ({ pokeClass }) =>{
  const { id, backgroundPosition } = pokeClass;
  const style = { backgroundImage: `url(${sprite})`, backgroundPosition}
  return <button className="poke-cell" style={style}></button>
}

export default PokeCell
