import React from 'react'
import './App.css';
import ListOfGames from './components/ListOfGames';
import { Route } from 'wouter'
import ShopCart from './components/ShopCart';
import useCart from './hooks/useCart';

const App = () => { 

  const [carro, addToCart] = useCart([])

  return (
    <div>
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <h1> App Games </h1>
        <ShopCart 
          carro={carro}
          addToCart={addToCart}
        />
      </nav>
      <div className='container text-center'>
        <Route 
          path='/games' 
          component={ListOfGames} 
        />
        </div>
    </div>
  );
}

export default App;