import React, {useState, useEffect} from "react";
import Games from './Games'
import getGames from "../services/getGames";

const ListOfGames = () => {

    const [games, setGames] = useState([])
  
    useEffect(() => {
        getGames().then(games => setGames(games))
    }, [])

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