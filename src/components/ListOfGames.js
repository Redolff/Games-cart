import React, {useState, useEffect} from "react";
import SearchGames from "./SearchGames";
import getGames from "../services/getGames";

const ListOfGames = () => {

    const [games, setGames] = useState([])

    useEffect(() => {
        getGames().then(games => setGames(games))
    }, [])

    return (
        <div className='container text-center'>
            <SearchGames
                games={games}
            />
        </div>
    )
}

export default ListOfGames