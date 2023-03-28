import React, { useState } from "react";
import Games from "./Games";

const SearchGames = ({ games }) => {

    const [search, setSearch] = useState({ price: '', texto: '' })

    const searcher = (e) => {
        setSearch({ 
            ...search,
            [e.target.name]: e.target.value, 
        })
    }

    let results = [] 
    if(search.price){
        results = games.filter((game) => game.precio <= search.price)
        if(results.length > 0){
            results = results.filter((result) => result.nombre.toLowerCase().includes((search.texto).toLocaleLowerCase()))
        }
    }else{
        results = games
    } 
    
    return (
        <div>
                <input name="price" value={search.price} onChange={searcher} type='number' className="form-control" placeholder="Search price..."></input>
            <form className="search">
                <input name="texto" value={search.texto} onChange={searcher} type='text' className="form-control" placeholder="Search game..."/>
            </form>
            <Games 
                results={results}
            />
        </div>
    )
}

export default SearchGames