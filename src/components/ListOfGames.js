import React, { useState, useEffect } from "react";
import SearchGames from "./SearchGames";
import getGames from "../services/getGames";

const ListOfGames = ({ addToCart }) => {

  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames().then((games) => setGames(games));
  }, []);

  return (
    <div className="container text-center">
      <SearchGames 
        games={games} 
        addToCart={addToCart}  
      />
    </div>
  );
};

export default ListOfGames;
