import React from "react";
import useCart from "../hooks/useCart";
import Game from "./Game";

const Games = ({ results }) => {
    
    const [carro, addToCart] = useCart([])
    
    return (
        <div className="row">
            {results.map((game => 
                <Game
                    addToCart={addToCart}
                    key={game.id}
                    game={game}
                    carro={carro}
                />
            ))} 
        </div>
    )
}

export default Games