import React, { useState } from "react";
import Games from "./Games";

const SearchGames = ({ games, addToCart }) => {

    const [search, setSearch] = useState({ price: '' })

    const searcher = (e) => {
        setSearch({ 
            ...search,
            [e.target.name]: e.target.value, 
        })
    }

    let results = [] 
    if(search.price){
        results = games.filter((game) => game.precio <= search.price)   
    }else{
        results = games
    } 
    
    return (
        <div>
            <form className="search">
                <input 
                    name="price" 
                    value={search.price} 
                    onChange={searcher} 
                    type='number' 
                    className="form-control" 
                    placeholder="Buscar por precio: $(en pesos argentinos)"
                />
            </form>
            <Games 
                results={results}
                addToCart={addToCart}
            />
        </div>
    )
}

export default SearchGames