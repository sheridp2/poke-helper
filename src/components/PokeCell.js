import React from "react";
import sprite from "../assets/sprites.png";
import "./styles/PokeCell.css";

const PokeCell = ({ pokeClass, handleOnClick }) => {
  const { id, backgroundPosition } = pokeClass;
  const style = { backgroundImage: `url(${sprite})`, backgroundPosition };
  return (
    <button
      onClick={() => handleOnClick(id)}
      className="poke-cell"
      style={style}
    />
  );
};

export default PokeCell;
