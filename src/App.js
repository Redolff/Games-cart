import React from 'react'
import './App.css';
import ListOfGames from './components/ListOfGames';
import { Route } from 'wouter'

const App = () => { 
  return (
    <div className='container text-center'>
      <h1> App Games </h1>
      <Route 
        path='/games' 
        component={ListOfGames} 
      />
    </div>
  );
}

export default App;