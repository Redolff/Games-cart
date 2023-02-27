import React from "react";
import Games from './Games'

const ListOfGames = ({ games }) => {
    return (
        <div className="row">
            {games.map(({ id, nombre, imagen, precio, stock, boton }) => 
                <Games 
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

export default ListOfGames