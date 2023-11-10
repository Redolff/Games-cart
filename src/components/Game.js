import React from "react"

const Game = ({ game, addToCart }) => {

  return (
    <div className="col-4 card">
      <h2 key={game.id} className="card-title"> {game.nombre} </h2>
      <img
        src={game.imagen}
        alt={game.nombre}
        className="img-thumbnail"
        height="100"
        width="300"
      />
      <h5> ${game.precio} </h5>
      <button onClick={() => addToCart(game)}> 
        Add to cart 
      </button>
    </div>
  );
};

export default Game;
