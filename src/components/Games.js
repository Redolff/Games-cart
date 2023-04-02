import React from "react";
import Game from "./Game";
import useCart from "../hooks/useCart";

const Games = ({ results }) => {
  const [, addToCart] = useCart();
  return (
    <div className="row">
      {results.map((game) => (
        <Game game={game} addToCart={addToCart} key={game.id} />
      ))}
    </div>
  );
};

export default Games;
