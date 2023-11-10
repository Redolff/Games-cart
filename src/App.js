import React from "react";
import "./App.css";
import ListOfGames from "./components/ListOfGames";
import ShopCart from "./components/ShopCart";
import useCart from "./hooks/useCart";

const App = () => {

  const [ carro, addToCart, esCarroVisible, mostrarCarro ] = useCart()

  return (
    <div>
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <h1> App Games </h1>
        <ShopCart 
          carro={carro} 
          esCarroVisible={esCarroVisible} 
          mostrarCarro={mostrarCarro}
        />
      </nav>
      <div className="container text-center">
        <ListOfGames 
          addToCart={addToCart}
        />
      </div>
    </div>
  );
};

export default App;
