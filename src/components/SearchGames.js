import React, { useState } from "react";
import Games from "./Games";

const SearchGames = ({ games }) => {

    const [search, setSearch] = useState('')
    const [searchPrice, setSearchPrice] = useState('')

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    const searcherPrice = (e) => {
        setSearchPrice(e.target.value)
    }

    let results = []
    if(searchPrice){
        results = games.filter((game) => game.precio <= searchPrice)
        if(results.length > 0){
            results = results.filter((result) => result.nombre.toLowerCase().includes(search.toLocaleLowerCase()))
        }
    }else{
        results = games
    }
    
    return (
        <div>
            <form className="search">
                <input value={searchPrice} onChange={searcherPrice} type='number' className="form-control" placeholder="Search price..."></input>
                <input value={search} onChange={searcher} type='text' className="form-control" placeholder="Search..."/>
            </form>
            <Games 
                results={results}
            />
        </div>
    )
}

export default SearchGames