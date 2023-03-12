import React from "react";
import Game from "./Game";

const AllGames = ({ games, results }) => {
    return (
        <div className="row">
            {results.map(({ id, nombre, imagen, precio, stock, boton }) => 
                <Game
                    key={id} 
                    id={id}
                    nombre={nombre}
                    imagen={imagen}
                    precio={precio}
                    stock={stock}
                    boton={boton}
                />
            )}
        </div>
    )
}

export default AllGames