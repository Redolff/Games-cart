import React, { useEffect, useState } from 'react'
import './App.css';
import getGames from './services/getGames';

const App = () => {
  
  const [games, setGames] = useState([])
  
  useEffect(() => {
    getGames().then(games => setGames(games))
  }, [])
  
  return (
    <div className='container text-center'>
      <div className="row">
          {games.map((x) => 
            <div key={x.id} className="col-4 card" width= '18rem'>
                <h2 className="card-title"> {x.nombre} </h2>
                <img src={x.imagen} alt={x.nombre} className="img-thumbnail" height='250' width='250'/>
            </div>
          )}
      </div>
    </div>
  );
}

export default App;