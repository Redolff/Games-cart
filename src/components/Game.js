import React from "react";

const Game = ({ game, addToCart }) => {
  return (
    <div className="col-4 card" width="18rem" height="30">
      <h2 className="card-title"> {game.nombre} </h2>
      <img
        src={game.imagen}
        alt={game.nombre}
        className="img-thumbnail"
        height="200"
        width="500"
      />
      <h5> ${game.precio} </h5>
      <button onClick={() => addToCart(game)}> Add to cart </button>
    </div>
  );
};

export default Game;
