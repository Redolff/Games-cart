import React, { useEffect, useState } from 'react'
import './App.css';
import getGames from './services/getGames';
import ListOfGames from './components/ListOfGames';

const App = () => {
  
  const [games, setGames] = useState([])
  
  useEffect(() => {
    getGames().then(games => setGames(games))
  }, [])
  
  return (
    <div className='container text-center'>
      <ListOfGames
        games={games}
      />
    </div>
  );
}

export default App;