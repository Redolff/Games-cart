import React, {useState, useEffect} from "react";
import Games from './Games'
import getGames from "../services/getGames";

const ListOfGames = () => {

    const [games, setGames] = useState([])
    const [search, setSearch] = useState('')

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    let results = []
    if(!search){
        results = games
    }else{
        results = games.filter((game) => game.nombre.toLowerCase().includes(search.toLocaleLowerCase()))
    }
  
    useEffect(() => {
        getGames().then(games => setGames(games))
    }, [])

    return (
        <div className='container text-center'>
            <form className="search">
                <input value={search} onChange={searcher} type='text' className="form-control" placeholder='Search...' />
            </form>
            <div className="row">
                {results.map(({ id, nombre, imagen, precio, stock, boton }) => 
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
        </div>
    )
}

export default ListOfGames