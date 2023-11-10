import React from "react";
import Game from "./Game";

const Games = ({ results, addToCart }) => {

  return (
    <div className="row">
      {results.map((game) => (
        <Game 
          addToCart={addToCart}  
          key={game.id} 
          game={game} 
        />
      ))}
    </div>
  );
};

export default Games;
